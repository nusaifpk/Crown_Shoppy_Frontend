import React, { useState, useEffect } from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';
import userInstance from '../../axios_interceptors/user_axios';
import { Select, MenuItem, FormControl, InputLabel, Slider, Typography, IconButton, TextField, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Product = () => { 
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRangeVisible, setPriceRangeVisible] = useState(false);
  const [priceRange, setPriceRange] = useState([4000, 10000]);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await userInstance.get(`/product`);
        setProducts(response.data.data);
        setProductsCount(response.data.dataCount);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await userInstance.get(`/categories`);
        setCategories(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const togglePriceRangeVisibility = () => {
    setPriceRangeVisible(!priceRangeVisible);
  };

  const valuetext = (value) => {
    return `$${value}`;
  };

  return (
    <div className="items-page">
      <div className="sidebar">
        <FormControl fullWidth variant="outlined" className="category-dropdown">
          <InputLabel>Browse Categories</InputLabel>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Browse Categories"
            className="filter-dropdown"
          >
            {categories.map((category) => (
                <MenuItem key={category._id} value={category.name}>
                  {category.name.toUpperCase()}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <div className="price-range-section">
          <button className="filter-btn" onClick={togglePriceRangeVisibility}>
            {priceRangeVisible ? (
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                Price <ArrowDropUpIcon />
              </div>
            ) : (
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                Price <ArrowDropDownIcon />
              </div>
            )}
          </button>
          {priceRangeVisible && (
            <div className="price-range">
                <Typography>Price</Typography>
                <Slider
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    valueLabelDisplay="auto"
                    getAriaLabel={() => 'Price range'}
                    getAriaValueText={valuetext}
                    min={4000}
                    max={20000}
                    step={100}
                />

              <Typography gutterBottom>Price: ₹{priceRange[0]} - ₹{priceRange[1]}</Typography>
            </div>
          )}
        </div>
      </div>
      <div className="main-content">
        <div className="search-featured">
          <div className="search-bar">
            <TextField fullWidth type="search" label="Search" variant="outlined" />
            <Button color='success' variant="contained">Search</Button>
          </div>
          <div className="featured-dropdown">
            <FormControl fullWidth variant="outlined" className="category-dropdown">
            <InputLabel>Features</InputLabel>
            <Select
                label="Features"
                className="filter-dropdown"
            >
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Price - low to high</MenuItem>
                    <MenuItem>Price - high to low</MenuItem>
                    <MenuItem>Recently added</MenuItem>
                </Select>
            </FormControl>
          </div>
        </div>
        <div className="results-count">Showing results of {productsCount} Products</div>
        <div className="items-grid">
          {loading ? (
            <div>Loading...</div>
          ) : (
            products.map((product) => (
              <div className="item-card" key={product._id}>
                <img src={product.images[0]} alt={product.name} />
                <div className="item-details">
                  <h3>{product.name}</h3>
                  {!product.price ? (
                    <p className="item-price">not available</p>
                  ): (
                    <p className="item-price">₹{product.price}/-</p>
                  )}
                  {/* <p className="item-original-price">{product.originalPrice}</p> */}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
