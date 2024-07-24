import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import { toast } from 'react-hot-toast';
import Button from 'react-bootstrap/esm/Button';
import Sidebar from '../../components/sidebar/Sidebar';
import { PropagateLoader } from 'react-spinners';
import adminInstance from '../../../axios_interceptors/admin_axios';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      const imageArray = [];
      for (let i = 0; i < files.length; i++) {
        imageArray.push(files[i]);
      }
      setProductData((prevData) => ({
        ...prevData,
        images: imageArray,
      }));
    } else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('category', productData.category);
      for (let i = 0; i < productData.images.length; i++) {
        formData.append('images', productData.images[i]);
      }

      const response = await adminInstance.post('/admin/product', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      toast.success('Product added Successfully...');

      // Clear form after success
      setProductData({
        name: '',
        category: '',
        images: [],
      });
      setLoading(false);
    } catch (error) {
      console.error('Error adding property:', error);
      toast.error('Error adding property..');
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await adminInstance.get('/admin/categories');
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className='property_container'>
      <Sidebar />
      <div className='add_property'>
        <h2>Add Product</h2>
        <form className='form' onSubmit={handleSubmit}>
          <TextField
            type='text'
            name='name'
            label='Name'
            variant='outlined'
            value={productData.name}
            onChange={handleChange}
            required
          />
          <FormControl variant='outlined' className='input_style' required>
            <InputLabel id='category-label'>Select</InputLabel>
            <Select
              labelId='category-label'
              name='category'
              value={productData.category}
              onChange={handleChange}
              label='Select'
            >
              <MenuItem value='' disabled hidden>
                Select
              </MenuItem>
              {categories.map((category) => (
                <MenuItem key={category._id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <input
            type='file'
            name='images'
            accept='image/*'
            onChange={handleChange}
            className='file_input_style'
            required
            multiple
          />
          
          <Button type='submit' variant='success' className='submit_button_style'>
                        {loading ? (
                            <PropagateLoader color="#fff" loading={loading} size={10} style={{ alignItems: "center" }} />
                        ) : (
                            'ADD PRODUCT'
                        )}
                    </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
