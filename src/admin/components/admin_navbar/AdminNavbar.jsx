import React, { useState } from 'react';
import "./AdminNavbar.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const AdminNavbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <Navbar expand="lg" variant="light" className='main_nav'>
        <Container>
          <Navbar.Brand style={{ cursor: "pointer" }}>
            <div className='nav_header'>
              <h1>Overview</h1>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarButtonsExample" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarButtonsExample">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link>PRODUCTS</Nav.Link>
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
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default AdminNavbar;
