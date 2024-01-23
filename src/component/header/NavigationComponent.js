import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const NavigationComponent = () => {
  const [isNavToggle, setIsNavToggle] = useState(false);
  const toggler = () => setIsNavToggle(!isNavToggle);
  return (
    <div className='header'>
      <Navbar color='dark' dark expand='sm'>
        <NavbarToggler onClick={toggler} />
        <NavbarBrand href="/">PETUK-RESTORA</NavbarBrand>
        <Collapse isOpen={isNavToggle} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className='nav-link'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/menu" className='nav-link'>Menu</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className='nav-link'>About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className='nav-link'>Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationComponent;