import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Product from '../pages/products/Product.jsx';
import ProductDetails from '../pages/product_details/ProductDetails.jsx';
import Cart from '../pages/cart/Cart.jsx';
import Profile from '../pages/profile/Profile.jsx';
import NavBar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import ContactForm from '../pages/conatct/ContactForm.jsx';

const UserRoute = () => {
  const location = useLocation();

  const shouldShowNavbar = !location.pathname.startsWith('/admin');

  return (
    <>
      {shouldShowNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/contact" element={<ContactForm />} /> 
      </Routes>

      {shouldShowNavbar && <Footer />}
    </>
  );
};

export default UserRoute;
