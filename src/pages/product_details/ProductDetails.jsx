import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import userInstance from '../../axios_interceptors/user_axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await userInstance.get(`/product/${id}`);
        setProduct(response.data.data);
        setMainImage(response.data.data.images[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProperty();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='product-details_container'>
      <div className="product-details_left">
        <div className="product-details">
          <img src={mainImage} alt='main' className='main_img' />
          <div className='sub_img_section'>
            {product.images.map((image, index) => (
              <img
                src={image}
                alt={`img${index}`}
                className='sub_img'
                key={index}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="product-details_right">
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <div className="icon_section">
            <i className='fa fa-heart' />
            <i className='fab fa-whatsapp' />
          </div>
          <hr />
          <div className="quantity_section">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button className="add_to_cart_button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
