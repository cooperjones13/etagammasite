import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, DropdownButton} from 'react-bootstrap';
import '../style/Navigation.scss';
import logo from '../images/thetatauwhite.png';

function Navigation() {

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="Navigation">
      <Navbar.Brand as={Link} to="/">
        <img
          alt="Theta Tau - University of Colorado Boulder Logo"
          src={logo}
          className="d-inline-block align-top logo-image"
        />
        <div className="title-container">
          <h1>Theta Tau</h1>
          <p>University of Colorado</p>
        </div>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav justify-content-end" >
        <Nav>
          <Nav.Link as={Link} to="/" className="navlinks">Home</Nav.Link>
          <NavDropdown as={DropdownButton} title="About" id="collasible-nav-dropdown" alignRight className="navlinks">
            <NavDropdown.Item as={Link} to="/history">History</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brotherhood">Brotherhood</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/careers">Profession</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/service">Service</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://www.thetatau.org" target="_blank">Nationals</NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown as={DropdownButton} title="Rush" id="collasible-nav-dropdown" alignRight className="navlinks">
            <NavDropdown.Item as={Link} to="/rush">Info</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/rush/faq">FAQ</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/rush/contact">Contact</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://forms.gle/h7A6dZ9gWuGvgnaB7" target="_blank">Signup</NavDropdown.Item>
            
          </NavDropdown>

          <NavDropdown title="Members" id="collasible-nav-dropdown" alignRight className="navlinks">
            <NavDropdown.Item as={Link} to="/members/active">Actives</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/members/alumni">Alumni</NavDropdown.Item>
            {/* <NavDropdown.Item as={Link} to="/family-tree">Family Tree</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;