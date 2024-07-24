import React, { useEffect, useState } from 'react';
import './Product.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import userInstance from '../../axios_interceptors/user_axios';

const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await userInstance.get(`/product`);
                // Simulate loading with setTimeout for 3 seconds
                setTimeout(() => {
                    setProducts(response.data.data);
                    setLoading(false);
                }, 1000); // Show skeleton for 3 seconds before setting loading to false
            } catch (error) {
                console.log(error);
                setLoading(false); // Handle error by setting loading to false
            }
        };
        fetchProducts();
    }, []);

    const handleShareWhatsApp = () => {
        const txt = "Hey, Iam interested in this product : ";
        const url = window.location.href;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(txt + url)}`;
        window.open(whatsappUrl);
        navigator.clipboard.writeText(url);
    };

    const SkeletonCard = () => (
        <div className="card">
            <div className="skeleton" />
            <div className="details">
                <div className="skeleton-details" />
                <div className="skeleton-text" />
                <div className="skeleton-text" />
            </div>
        </div>
    );

    return (
        <div className='main_product_container'>
            <h2 className='main_text'>Available Now</h2>
            <div className="product">
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
                ) : (
                    products.map((product) => (
                        <div key={product._id} className="card" onClick={() => navigate(`/products/${product._id}?name=${product.name}&category=${product.category}`)}>
                            <div className="card_img_container">
                                <img src={product.images[0]} alt={product.name} className='image' />
                            </div>
                            <div className="details">
                                <h3 className="name">{product.name}</h3>
                                <div className="price">
                                    <span className="new-price">{product.category}</span>
                                </div>
                                <Button variant='success' onClick={handleShareWhatsApp}><i className='fab fa-whatsapp' /> Enquiry</Button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Product;
