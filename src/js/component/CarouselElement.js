import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CarouselItem1 } from './CarouselItem1'
import { CarouselItem2 } from './CarouselItem2'
import { CarouselItem3 } from './CarouselItem3'
import { CarouselItem4 } from './CarouselItem4'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home.css';

export const CarouselElement = () => {
	return (
		<>
			<Container id="container-fluid" fluid>
				<Row>
					<Col className="imgDiv">
						<CarouselItem1 />
					</Col>
					<Col className="imgDiv">
						<CarouselItem2 />
					</Col>
					<Col className="imgDiv">
						<CarouselItem3 />
					</Col>
					<Col className="imgDiv">
						<CarouselItem4 />
					</Col>
				</Row>
			</Container>
		</>
	)
};
