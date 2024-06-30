import React from 'react';
import './Product.css';
import data_categories from '../../assets/data_categories';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate()
    return (
        <div className='main_product_container'>
            <h2 className='main_text'>Available Now</h2>
            <div className="product">
                {data_categories.map((product) => (
                    <div key={product.id} className="card" onClick={() => navigate('/productdetails')}>
                        <div className="card_img_container">
                            <img src={product.image} alt={product.type} className='image' />
                        </div>
                        <div className="details">
                            <h3 className="name">{product.type}</h3>
                            <div className="price">
                                <span className="new-price">₹999/-</span>
                            </div>
                            <Button variant='success'><i className='fab fa-whatsapp'/> Enquiry</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
