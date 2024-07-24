import React from 'react'
import './Enquiries.css'

const Enquiries = () => {
  return (
    <div>
        <h6>Recent Enquiries</h6>
        <table className='booking_table'>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>User Details</th>
                <th>Enquiry</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                <tr className='booking_row'>
                  <td>1</td>
                  <td>Name</td>
                  <td>Text</td>
                  <td>
                    <button>Reply</button>
                  </td>
                </tr>
            </tbody>
          </table>
          <p style={{margin:"10px 0 10px 0",fontSize:"13px"}}>showing 1-8 items of recent enquiries</p>
    </div>
  )
}

export default Enquiries