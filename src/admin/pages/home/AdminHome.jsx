import React from 'react'
import './AdminHome.css'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Services from '../../components/Services/Services.jsx'
import Enquiries from '../../components/enquiries/Enquiries.jsx'

const AdminHome = () => {
  return (
    <>
      <div className='admin-container'>
        <div><Sidebar /></div>
        <div className='admin-home-page'>
          <h5>Home <i className='fa fa-angle-right' /> <span>Dashboard</span></h5>
          <Services/>
          <div className='enquiry-section'>
            <Enquiries/>
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminHome