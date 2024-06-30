import React, { useState } from 'react';
import "./Navbar.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Register from '../register/Register'; 
import Login from '../login/Login'; 

const NavBar = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false); 
  const [showLoginModal, setShowLoginModal] = useState(false); 

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false); 
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false); 
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    navigate('/');
  };

  const name = localStorage.getItem('name')
  return (
    <>
      <Navbar expand="lg" variant="light" className='main_nav'>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: "pointer" }}>
            <div className='nav_header'>
              <h1>CROWN<span>SHOPPY</span></h1>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarButtonsExample" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarButtonsExample">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link onClick={() => navigate('/products')}>PRODUCTS</Nav.Link>
              <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Watches</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shoes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sunglasses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wallet</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Belt</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>ABOUT</Nav.Link>
              <Nav.Link>CONTACT</Nav.Link>
            </Nav>

            <div className="user_nav_icons">
              <input type="search" placeholder='Search here...' className={`search-input ${showSearch ? 'show' : ''}`} />
              <Nav.Link onClick={toggleSearch}><i className="fa fa-search" title="Search" /></Nav.Link>
              {!name && (
              <Nav.Link onDoubleClick={() => navigate('/admin')} onClick={handleOpenLoginModal}>Login</Nav.Link>
            )}

            {name && (
              <NavDropdown title={<b>{name}</b>} id="NavbarScrollingDropdown" >
                <>
                  <NavDropdown.Item onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/cart')}>Cart</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}><i className='fas fa-sign-out-alt' /> Logout</NavDropdown.Item>
                </>
              </NavDropdown>
            )}
              <Nav.Link onClick={() => navigate('/admin/login')}><i className="fas fa-user-shield" title='Admin' /></Nav.Link>
              <Nav.Link><i className="fab fa-whatsapp" title='Whatsapp now' /></Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Register open={showRegisterModal} handleClose={handleCloseRegisterModal} onLoginClick={handleOpenLoginModal} />
      <Login open={showLoginModal} handleClose={handleCloseLoginModal} onRegisterClick={handleOpenRegisterModal} />
    </>
  );
};

export default NavBar;
