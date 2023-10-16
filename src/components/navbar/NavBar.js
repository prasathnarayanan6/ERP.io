import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import nav from '../../assets/Img/Xyma_BG.svg';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary navbb text-bright">
      <Navbar.Brand href="#home" className="text-light"><b className="text-light">ERP.io</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto text-light">
          <Nav.Link href="#deets" width="12%" className="text-light">Welcome Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
