import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/about.css';

import '../img/front.jpg'
import '../img/PHOTO-2022-03-24-15-34-13.jpg';
import '../img/PHOTO-2022-03-24-15-34-37.jpg'

export const About = () => {
    return (
        <div>
            <Container className='aboutContainer'>
                <Row>
                    <Col className='text-about'>
                        <h4 >
                            Pallet305 is a company that was born in 2019, it specializes in creating, designing and modifying outdoor furniture, our product is exported from Spain, which is certified and treated.
                        </h4>
                        <br />
                        <h4 >
                            Some of our most demanded jobs for patios are sofas, coffee tables, planters, bars, loungers, mailboxes and much more variety. For interiors, custom beds, sliding doors, etc.
                        </h4>
                        <br />
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
                <hr />
                <Row>
                    <Col className='m-2'><img src={require('../img/PHOTO-2022-03-24-15-34-13.jpg').default } alt='PHOTO-2022-03-24-15-34-13' /></Col>
                    <Col ><img src='PHOTO-2022-03-24-15-34-37.jpg' alt='PHOTO-2022-03-24-15-34-37' /></Col>
                </Row>
            </Container>
        </div>
    )
}