import React from "react";
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'


import 'bootstrap/dist/css/bootstrap.min.css';


export const NavbarWebsite = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="./"><h1>PALLET305</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbarOptions">
                            <Nav.Link href="./about">About</Nav.Link>
                            <Nav.Link href="./design">Design</Nav.Link>
                            <Nav.Link eventKey={2} href="./contact">
                                Contact us
                            </Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                    <Col>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='icons' /></a>
                            </Col>
                            <Col xs lg="2">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='icons' /></a>
                            </Col>
                            <Col xs lg="2">
                                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='icons' /></a>
                            </Col>
                        </Row>
                    </Col>

                </Container>
            </Navbar>
        </div>
    )
}