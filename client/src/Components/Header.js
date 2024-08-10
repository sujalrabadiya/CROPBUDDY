import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons'; // Example icon
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" bg="light" className="px-3">
      <Navbar.Brand href="#home">
        <FontAwesomeIcon icon={faLeaf} size="2x" color="green" /> {/* Replace this icon as per your needs */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#shop">Shop</Nav.Link>
          <Nav.Link href="#collection">Collection</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="#home-v2">Home v2</NavDropdown.Item>
            <NavDropdown.Item href="#about">About</NavDropdown.Item>
            <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#single-post">Single Post</NavDropdown.Item>
            <NavDropdown.Item href="#shop">Shop</NavDropdown.Item>
            <NavDropdown.Item href="#single-product">Single Product</NavDropdown.Item>
            <NavDropdown.Item href="#checkout">Checkout</NavDropdown.Item>
            <NavDropdown.Item href="#cart">Cart</NavDropdown.Item>
            <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
            <NavDropdown.Item href="#faq">FAQs</NavDropdown.Item>
            <NavDropdown.Item href="#styles">Styles</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://templatesjungle.gumroad.com/l/plantlover-bootstrap-html-template" target="_blank" className="fw-bold">GETPRO</Nav.Link>
        </Nav>
        <Form inline className="ml-auto d-flex align-items-center">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <div className="d-flex align-items-center ms-3">
          <a href="#" className="me-3">
            <svg width="24" height="24" fill="currentColor">
              <use xlinkHref="#user" />
            </svg>
          </a>
          <a href="#" className="me-3">
            <svg width="24" height="24" fill="currentColor">
              <use xlinkHref="#like" />
            </svg>
          </a>
          <a href="cart.html">
            <svg width="24" height="24" fill="currentColor">
              <use xlinkHref="#shopping-bag" />
            </svg>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
