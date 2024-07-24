import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../admin/pages/login/AdminLogin'
import AdminHome from '../admin/pages/home/AdminHome'
// import AdminNavbar from '../admin/components/admin_navbar/AdminNavbar'
import AdminUsers from '../admin/pages/users/AdminUsers'
import AddCategory from '../admin/pages/add_category/AddCategory'
import AddProduct from '../admin/pages/add_product/AddProduct'

const AdminRoute = () => {
  // const shouldShowNavbar = !location.pathname.startsWith('/admin/login');
  return (
    <>
      
      {/* {shouldShowNavbar && <AdminNavbar/>} */}
      
      <Routes>
        <Route path='/admin/' element={<AdminHome/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/users' element={<AdminUsers/>} />
        <Route path='/admin/products/add' element={<AddProduct/>} />
        <Route path='/admin/categories' element={<AddCategory/>} />
      </Routes>
    </>
  )
}

export default AdminRoute