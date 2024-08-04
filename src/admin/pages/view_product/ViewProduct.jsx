import React, { useEffect, useState } from 'react';
import './ViewProducts.css';
import Sidebar from '../../components/sidebar/Sidebar';
import adminInstance from '../../../axios_interceptors/admin_axios';
import { Button, TextField} from '@mui/material';

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await adminInstance.get('/admin/product');
        console.log(response);
        
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className='property_container'>
      <Sidebar />
      <div className='add_property'>
        <h2>View Products</h2>
        <div className="main-content">
        <div className="search-featured">
          <div className="search-bar">
            <TextField className="input-search" label="Search" variant="outlined" fullWidth/>
            <Button className="search-btn" color="success" variant="contained">Search</Button>
          </div>
          
        </div>
        <div className="items-grid">
          {products.map((product) => (
              <div className="item-card" key={product._id}>
                <img src={product.images[0]} alt={product.name} />
                <div className="item-details">
                  <h3>{product.name}</h3>
                  {/* <p className="item-price">{product.price}</p> */}
                  {/* <p className="item-original-price">{product.originalPrice}</p> */}
                </div>
                <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
                    <Button color='primary' variant="contained">Edit</Button>
                    <Button color='error' variant="contained">Delete</Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewProduct;
