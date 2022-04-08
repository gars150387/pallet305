import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home.css';

import '../img/E2F7BDFE-FE72-48E0-B12F-441DEFEA0DC9.jpg'
import '../img/IMG_7808.jpg'
import '../img/61556755-B9B9-4DB0-8162-B38A736A693D.jpg'

import '../img/A9927117-9F9A-44C2-9BEF-35876E24C7DF.jpg'
import '../img/2B3A74AF-F7FF-41C5-B435-E3EB2FF30C85[1].jpg'
import '../img/18A20FB2-818E-4B72-BE1E-BDECCC52134D[1].jpg'

import '../img/58E5E329-E64F-4972-9392-A6CEAC17A913.jpg'
import '../img/66B913C7-B3DC-4FE5-93CC-D4AD67EB9379.jpg'
import '../img/29D529C0-9834-4926-A781-C6C881C0A2DE[1].jpg'

import '../img/69AFD7B7-FA23-4A54-AB51-7234A6795F2E.jpg'
import '../img/142B2076-642E-4451-8A54-F00F6822324A.jpg'
import '../img/567F3275-1455-4384-ABCC-53263531A3E1.jpg'


import '../img/85793fa7-72fb-492f-bc21-6a6def86bcf1.jpg'
import '../img/2562834a-fd18-45d3-b519-9edc954a3acd.jpg'
import '../img/f358a545-0748-4364-8c33-75d0764380f2.jpg'
import '../img/FE859BF3-BE14-4E3F-A83C-5D4163248E01.jpg'
import '../img/IMG_4199.jpg'
import '../img/IMG_6388.jpg'
import '../img/IMG_6389.jpg'
import '../img/IMG_7267.jpg'
import '../img/IMG_8029.jpg'
import '../img/IMG_8424.jpg'
import '../img/IMG_8585.jpg'


export const Home = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<Col className="imgDiv">
						<Carousel fade>
							<Carousel.Item id="carouselItem">
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/E2F7BDFE-FE72-48E0-B12F-441DEFEA0DC9.jpg").default}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/IMG_7808.jpg").default}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/61556755-B9B9-4DB0-8162-B38A736A693D.jpg").default}
										alt="" />

								</Row>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col className="imgDiv">
						<Carousel fade>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/A9927117-9F9A-44C2-9BEF-35876E24C7DF.jpg").default}
										alt="" />

								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/2B3A74AF-F7FF-41C5-B435-E3EB2FF30C85[1].jpg").default}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/18A20FB2-818E-4B72-BE1E-BDECCC52134D[1].jpg").default}
										alt="" />
								</Row>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col className="imgDiv">
						<Carousel fade>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/58E5E329-E64F-4972-9392-A6CEAC17A913.jpg").default}
										alt="" />

								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/66B913C7-B3DC-4FE5-93CC-D4AD67EB9379.jpg").default}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/29D529C0-9834-4926-A781-C6C881C0A2DE[1].jpg").default}
										alt="" />
								</Row>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col className="imgDiv">
						<Carousel fade>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/69AFD7B7-FA23-4A54-AB51-7234A6795F2E.jpg").default}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/142B2076-642E-4451-8A54-F00F6822324A.jpg").default}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block w-100"
										src={require("../img/567F3275-1455-4384-ABCC-53263531A3E1.jpg").default}
										alt="" />

								</Row>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</div>
	)
};
