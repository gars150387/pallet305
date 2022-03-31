import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home.css';

// import '../img/front.jpg'
import '../img/IMG_7808.jpg';
import '../img/61556755-B9B9-4DB0-8162-B38A736A693D.jpg';
import '../img/E2F7BDFE-FE72-48E0-B12F-441DEFEA0DC9.jpg';


export const Home = () => {
	return (
		<div>
			<Container fluid>
				<Row>
				<Col>
						<Carousel>
							<Carousel.Item>
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
					<Col>
						<Carousel>
							<Carousel.Item>
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
					<Col>
						<Carousel>
							<Carousel.Item>
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
					<Col>
						<Carousel>
							<Carousel.Item>
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
					{/* <Col>
						<Carousel>
							<Carousel.Item>
								<Row>

									<Col>
										<img
											className="d-block w-100"
											src={require("../img/E2F7BDFE-FE72-48E0-B12F-441DEFEA0DC9.jpg").default}
											alt="" />
									</Col>

								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>

									<Col>
										<img
											className="d-block w-100"
											src={require("../img/IMG_7808.jpg").default}
											alt="" />
									</Col>

								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>

									<Col>
										<img
											className="d-block w-100"
											src={require("../img/61556755-B9B9-4DB0-8162-B38A736A693D.jpg").default}
											alt="" />
									</Col>

								</Row>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col>
						<Carousel>
							<Carousel.Item>
								<Row>

									<Col>
										<img
											className="d-block w-100"
											src={require("../img/E2F7BDFE-FE72-48E0-B12F-441DEFEA0DC9.jpg").default}
											alt="" />
									</Col>

								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>

									<Col>
										<img
											className="d-block w-100"
											src={require("../img/IMG_7808.jpg").default}
											alt="" />
									</Col>

								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>

									<Col>
										<img
											className="d-block w-100"
											src={require("../img/61556755-B9B9-4DB0-8162-B38A736A693D.jpg").default}
											alt="" />
									</Col>

								</Row>
							</Carousel.Item>
						</Carousel>
					</Col> */}
				</Row>
			</Container>
		</div>
	)
};
