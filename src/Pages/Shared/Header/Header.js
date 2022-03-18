import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user,logOut}=useAuth()
    return (
        <>
            
            
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
    
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink}  to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink}  to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
      {user?.email?
        <button onClick={logOut}>Log Out</button> :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Navbar.Text>
        <a href="#login">{user.displayName? <span>{user.displayName}</span> : ''}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
</>


        
    );
};

export default Header;