import React, { useState } from 'react';
import "./Navbar.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Register from '../register/Register'; 
import Login from '../login/Login'; // Import the Login modal component

const NavBar = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false); 
  const [showLoginModal, setShowLoginModal] = useState(false); // State for login modal

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false); // Ensure login modal is closed
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false); // Ensure register modal is closed
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

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
              <Nav.Link onClick={toggleSearch}><i className="fa fa-search" /></Nav.Link>
              <Nav.Link onClick={handleOpenRegisterModal}><i className="fa fa-user-circle" /></Nav.Link> {/* Open Register modal */}
              <Nav.Link onClick={() => navigate('/cart')}><i className="fa fa-shopping-cart" /></Nav.Link>
              <Nav.Link><i className="fab fa-whatsapp" /></Nav.Link>
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
