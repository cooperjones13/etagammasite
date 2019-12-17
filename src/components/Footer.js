
import React from 'react';
// import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import './../style/Footer.scss';


function Footer() {

  return (
        <Navbar className="Footer">
            <Navbar.Text>
                &copy; Theta Tau 
            </Navbar.Text>
        </Navbar>
  );
}

export default Footer;

