import React from 'react'
import './MobileFooter.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';

const MobileFooter = () => {
    const navigate = useNavigate()
  return (
    
        <div className='mobile-footer'>
            <div className='mobile-footer-icons' onClick={() => navigate('/')}>
                <HomeOutlinedIcon/>
                <p>Home</p>
            </div>
            <div className='mobile-footer-icons'  onClick={() => navigate('/')}>
                <WhatsAppIcon/>
                <p>WhatsApp</p>
            </div>
            <div className='mobile-footer-icons'  onClick={() => navigate('/cart')}>
                <ShoppingBagOutlinedIcon/>
                <p>Cart</p>
            </div>
            <div className='mobile-footer-icons'  onClick={() => navigate('/profile')}>
                <AccountCircleOutlinedIcon/>
                <p>Profile</p>
            </div>
        </div>
  )
}

export default MobileFooter