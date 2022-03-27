import React from "react";
import { Link } from "react-router-dom";

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
			<Col>3 of 3</Col>
		</Row>
	</Container>
	</div>
);
