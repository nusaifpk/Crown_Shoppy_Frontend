import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Product from '../pages/products/Product.jsx';
import ProductDetails from '../pages/product_details/ProductDetails.jsx';
import Cart from '../pages/cart/Cart.jsx';
import Profile from '../pages/profile/Profile.jsx';
import NavBar from '../components/navbar/Navbar.jsx';

const UserRoute = () => {
  const location = useLocation();

  const shouldShowNavbar = !location.pathname.startsWith('/admin');

  return (
    <>
      {shouldShowNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default UserRoute;
