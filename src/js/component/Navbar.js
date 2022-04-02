import React from "react";
import { Row, Col, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im';

import '../img/logo.png';
import '../img/officalLogo.jpg';
import '../img/white-logo-transparent-background.png'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/navbar.css'
import { Link } from "react-router-dom";



export const NavbarWebsite = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid className="text-center">
                    <Row>
                        {/* <Col  xs={6} md={2}></Col> */}
                        <Col className="text-start">
                            <Link to="/">
                                <img src='/white-logo-transparent-background.png'
                                    alt='logo'
                                    id='logo'
                                    width="10"
                                    height="250"
                                />
                            </Link>
                        </Col>
                        {/* <Col xs={6} md={2}></Col> */}
                    </Row>
                </Container>
            </Navbar>
            <Navbar id="secondNavbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="./"><h1>PALLET305</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="./about">About</Nav.Link>
                            <Nav.Link href="./design">Design</Nav.Link>
                            <Nav.Link href="./contact">Contact Us</Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='icons' /></Nav.Link>
                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='icons' /></Nav.Link>
                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='icons' /></Nav.Link>
                            <NavDropdown title="" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Spanish</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}