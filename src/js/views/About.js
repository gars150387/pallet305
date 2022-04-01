import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/about.css';

import '../img/front.jpg'
import '../img/85793fa7-72fb-492f-bc21-6a6def86bcf1.jpg';
import '../img/f358a545-0748-4364-8c33-75d0764380f2.jpg'

export const About = () => {
    return (
        <div>
            <Container className='aboutContainer'>
                <Row>
                    <Col className='text-about'>
                        <h4 >
                            Pallet305 is a company that was born in 2019, it specializes in creating, designing and modifying outdoor furniture, our product is exported from Spain, which is certified and treated.
                        </h4>
                        <br/>
                        <h4 >
                            Some of our most demanded jobs for patios are sofas, coffee tables, planters, bars, loungers, mailboxes and much more variety. For interiors, custom beds, sliding doors, etc.
                        </h4>
                        <br/>
                        <h4 >
                            We build pergolas and wooden floors (PT) to everyone's taste and satisfaction.
                            Our priority is the customer, we are proud to be able to provide the best service and quality with our products.
                        </h4>
                    </Col>
                    <Col>
                    <img
								className="d-block w-100 m-4"
								src={require("../img/front.jpg").default}
								alt="" />
                    
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                    <img
								className="d-block w-100"
								src={require("../img/85793fa7-72fb-492f-bc21-6a6def86bcf1.jpg").default}
								alt="" />
                    </Col>
                    <Col>
                        <h3 id="about">
                            Some of our most demanded jobs for patios are sofas, coffee tables, planters, bars, loungers, mailboxes and much more variety. For interiors, custom beds, sliding doors, etc.
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 id="about">
                            We build pergolas and wooden floors (PT) to everyone's taste and satisfaction.
                            Our priority is the customer, we are proud to be able to provide the best service and quality with our products.
                        </h3>
                    </Col>
                    <Col>
                    <img
								className="d-block w-100"
								src={require("../img/f358a545-0748-4364-8c33-75d0764380f2.jpg").default}
								alt="" />
                    </Col>
                </Row> */}
                {/* <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row> */}
            </Container>
        </div>
    )
}