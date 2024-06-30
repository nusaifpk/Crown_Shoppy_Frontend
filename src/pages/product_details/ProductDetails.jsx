import React from 'react'
import './ProductDetails.css'
import img1 from '../../assets/categories/img1.jpg'

const ProductDetails = () => {
  return (
    <div className='product-details_container'>
      <div className="product-details_left">
        <div className="product-details">
          <img src={img1} alt='img1' className='main_img' /> 
          <div className='sub_img_section'>
            <img src={img1} alt='img1' className='sub_img' /> 
            <img src={img1} alt='img1' className='sub_img' /> 
            <img src={img1} alt='img1' className='sub_img' /> 
          </div>
        </div>
      </div>
      <div className="product-details_right">
        <div>
          <h3>Name</h3>
          <p>Category</p>
          <p>Price</p>
          <div style={{display:"flex",gap:"20px"}}>
          <i className='fa fa-heart'/>
          <i className='fab fa-whatsapp'/>
          </div>
          <hr />
          <p>Qty <button>+</button>{100}<button>-</button></p>


        </div>
      </div>
    </div>
  )
}

export default ProductDetails