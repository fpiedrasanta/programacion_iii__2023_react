import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './navBar.css';

import { 
    Navbar, 
    Nav, 
    Container, 
    NavDropdown } from 'react-bootstrap';


const NavBar = () => {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">PIII</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <NavDropdown title="Recursos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/bibliografias">Bibliografias</NavDropdown.Item>
                            <NavDropdown.Item href="/videos">Videos</NavDropdown.Item>
                            <NavDropdown.Item href="/links-de-interés">Links de interés</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;