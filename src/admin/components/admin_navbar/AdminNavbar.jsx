import React, { useState } from 'react';
import "./AdminNavbar.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Profile from '../../../assets/profile.png';

const AdminNavbar = () => {
  const username = localStorage.getItem('adminUsername').toUpperCase()
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
              <Nav.Link>Temp</Nav.Link>
            </Nav>

            <div className="user_nav_icons">
              <NavDropdown title="Branch Access" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action  1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Action  2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><i className='fas fa-clock'/> Last login</Nav.Link>
              <div className='admin_name_section'>
                <Nav.Link><img src={Profile} className='profile-logo'/></Nav.Link>
                <NavDropdown title={<>{username}<br/><span>admin</span></>} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action  1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action  2</NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default AdminNavbar;
