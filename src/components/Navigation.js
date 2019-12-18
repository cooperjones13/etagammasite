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
            <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/history">History</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/values">Values</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://www.thetatau.org" target="_blank">Nationals</NavDropdown.Item>
            
          </NavDropdown>
          <Nav.Link as={Link} to="/rush" className="navlinks">Rush</Nav.Link>
          <NavDropdown title="Members" id="collasible-nav-dropdown" alignRight className="navlinks">
            <NavDropdown.Item as={Link} to="/members/active">Actives</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/members/alumni">Alumni</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/family-tree">Family Tree</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/addmembers">Add Members</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;