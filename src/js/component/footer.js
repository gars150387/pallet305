import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { CgCopyright } from 'react-icons/cg'
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";

import { FaCcVisa, FaCcDiscover, FaCcMastercard, FaMoneyBillAlt } from 'react-icons/fa';

import '../../styles/footer.css'

export const Footer = () => (
	<div className="footer">
		<Container fluid>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Row>
						<Row></Row>
						<Col md="auto">
							<Link to="./about">
								<h5 >About</h5>
							</Link>
							<Link to="./design">
								<h5>Design</h5>
							</Link>
							<Link to="./contact">
								<h5>Contact</h5>
							</Link>
						</Col>
						<Col md="auto">
							<Link to="./policy">
								<h5>Policy</h5>
							</Link>
							<Link to="./payment">
								<h5>Payment</h5>
							</Link>
						</Col>
						<Col></Col>
					</Row>
					<Col md="auto">
						<Row xs="auto">
							<Col xs lg=""><a style={{ fontSize: "20px" }} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='iconsFooter' /></a></Col>
							<Col xs lg=""><a style={{ fontSize: "20px" }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='iconsFooter' /></a></Col>
							<Col xs lg=""><a style={{ fontSize: "20px" }} target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='iconsFooter' /></a></Col>
						</Row>
						<br />
						<Row style={{ height: "15px" }}></Row>
						<Row>
							<Col><FaCcVisa style={{ color: "white", fontSize: "50px" }} /></Col>
							<Col><FaCcDiscover style={{ color: "white", fontSize: "50px" }} /></Col>
							<Col><FaCcMastercard style={{ color: "white", fontSize: "50px" }} /></Col>
							<Col><FaMoneyBillAlt style={{ color: "white", fontSize: "55px" }} /></Col>
						</Row>
						<br />


					</Col>
				</Container>
			</Navbar>
			<Row></Row>
			<Row>
				<Col></Col>
				<Col xs={5}>
					<Row className="justify-content-md-center">
						<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
							<Container>
								{/* <Navbar.Brand></Navbar.Brand>
								<Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
								<Navbar.Collapse id="responsive-navbar-nav">
									<Col className="text-center"><p>Copyright <CgCopyright /> 2022 Pallet305 </p></Col>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</Row>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	</div>
);
