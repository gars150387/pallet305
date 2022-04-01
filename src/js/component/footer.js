import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { CgCopyright } from 'react-icons/cg'

import { Navbar, Container, Row, Col } from "react-bootstrap";

import '../../styles/footer.css'

export const Footer = () => (
	<div className="footer">
		<Container fluid>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Row>
						<Row></Row>
						<Col>
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
						<Col>
							<Link to="./policy">
								<h5>Policy</h5>
							</Link>
							<Link to="./payment">
								<h5>Payment</h5>
							</Link>
						</Col>
						<Col>
							<Row xs="auto">
								<Col xs lg="2"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='iconsFooter' /></a></Col>
								<Col xs lg="2"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='iconsFooter' /></a></Col>
								<Col xs lg="2"><a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='iconsFooter' /></a></Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</Navbar>
			<Row>
				<Col></Col>
				<Col xs={5}>
					<Row className="justify-content-md-center">
						<Col xs lg="2"></Col>
						<Col md="auto"><p>Copyright <CgCopyright /> 2022 Pallet305 </p></Col>
						<Col xs lg="2"></Col>
					</Row>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	</div>
);
