import React from 'react'
import { Col, Row, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
        <Navbar expand="md" className="navbar">
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>My Store</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to='/cart'>
                  <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link><i className='fas fa-user'></i> Sing In</Nav.Link>
                </LinkContainer>
              </Nav>  
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Header
