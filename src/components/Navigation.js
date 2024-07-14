import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'; // Importing necessary components from react-bootstrap
import logo from '../assets/logo.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-white p-3">
      <Navbar.Brand href="/" className='ms-3'>
        <img src={logo} alt='SmartBlink logo' style={{ height: "60px", width: "200px", objectFit: "cover" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
      <Navbar.Collapse id="navbarTogglerDemo02">
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="/" className="font-weight-bold">Home</Nav.Link>
          <Nav.Link href="/about" className="font-weight-bold">About</Nav.Link>
          <Nav.Link href="/product" className="font-weight-bold">Products</Nav.Link>
          <Nav.Link href="/support" className="font-weight-bold">Support</Nav.Link>
          <Nav.Link href="/FAQ" className="font-weight-bold">FAQ</Nav.Link>
          <Nav.Link href="/contact" className="font-weight-bold">Contact Us</Nav.Link>
          <Button className="ms-2 text-white" style={{ backgroundColor: "#194E86" }}>
            Schedule a Consultation
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
