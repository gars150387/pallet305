import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'

import { Container, Row, Col } from "react-bootstrap";

import '../../styles/footer.css'

export const Footer = () => (
	<div className="footer">
		<Container className="sticky-bottom" bg="dark" variant="dark">
			<Row md={4}>
				<Col><Link to="./about">
					<h5 >About</h5>
				</Link>
					<Link to="./design">
						<h5>Design</h5>
					</Link>
					<Link to="./contact">
						<h5>Contact</h5>
					</Link></Col>
				<Col xs={6}><Link to="./policy">
					<h5>Policy</h5>
				</Link>
					<Link to="./payment">
						<h5>Payment</h5>
					</Link></Col>
				<Col>
					<a target="_blank" rel="noopener noreferrer"  href="https://www.facebook.com/Pallet305"><FaFacebookF id='icons' /></a>
					<a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/pallet_305/"><FaInstagram id='icons' /></a>
					<a target="_blank" rel="noopener noreferrer"  href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='icons' /></a>
				</Col>
			</Row>
		</Container>
	</div>
);
