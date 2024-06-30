import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../admin/pages/login/AdminLogin'
import AdminHome from '../admin/pages/home/AdminHome'
import AdminNavbar from '../admin/components/admin_navbar/AdminNavbar'

const AdminRoute = () => {
  return (
    <>
    <AdminNavbar/>
    <Routes>
        <Route path='/admin/' element={<AdminHome/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
    </Routes>
    </>
  )
}

export default AdminRoute