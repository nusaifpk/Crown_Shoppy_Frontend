import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { toast } from 'react-hot-toast';

const Sidebar = () => {

    const handleLogout = () => {
        toast.success('logged out success')
        localStorage.removeItem('adminToken')
    }

    return (
        <div style={{ display: "flex", height: "100vh", overflow: "scroll initial", borderRight: "1px solid rgba(0, 0, 0, 0.12)" }}>
            <CDBSidebar textColor="black" backgroundColor="#fff">
                <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>
                    <h5 to='/admin/'>CROWN<span>SHOPPY</span></h5>
                </CDBSidebarHeader>
                <CDBSidebarContent className='sidebar-content'>
                    <CDBSidebarMenu>
                        <NavLink to='/admin' activeClassName="activeClicked" title='Home'>
                            <CDBSidebarMenuItem icon='home'>Home</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to='/admin/users' activeClassName="activeClicked" title='Users'>
                            <CDBSidebarMenuItem icon='users'>Users</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to='/admin/products' activeClassName="activeClicked" title='Products'>
                            <CDBSidebarMenuItem icon='list'>Products</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to='/admin/products/add' activeClassName="activeClicked" title='Add Product'>
                            <CDBSidebarMenuItem icon='plus-circle'>Add Product</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to='/admin/enquiries' activeClassName="activeClicked" title='Enquiries'>
                            <CDBSidebarMenuItem icon='paper-plane'>Enquiries</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to='/admin/categories' activeClassName="activeClicked" title='Categories'>
                            <CDBSidebarMenuItem icon='list'>Categories</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to='/' activeClassName="activeClicked" title='Logout' onClick={handleLogout}>
                            <CDBSidebarMenuItem icon='door-open'>Logout</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter className='footer'></CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

export default Sidebar