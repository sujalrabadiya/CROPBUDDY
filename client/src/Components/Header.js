import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faBell, faUser, faTint } from '@fortawesome/free-solid-svg-icons'; // Example icons
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" bg="light" className="px-3">
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faLeaf} size="2x" color="green" /> {/* Main Logo/Icon */}
        <span className="ms-2 fw-bold">CropBuddy</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/plant-management">Plant Management</Nav.Link>
          <Nav.Link href="/soil-moisture-monitoring">Soil Monitoring</Nav.Link>
          <Nav.Link href="/weather-forecast">Weather Forecast</Nav.Link>
          <Nav.Link href="/tips-resources">Tips & Resources</Nav.Link>
          
        </Nav>
        
        <div className="d-flex align-items-center ms-3">
          <a href="/alerts" className="me-3">
            <FontAwesomeIcon icon={faBell} size="lg" />
          </a>
          <a href="/user-profile" className="me-3">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </a>
          <a href="/water-usage">
            <FontAwesomeIcon icon={faTint} size="lg" />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
