import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const About = () => {
    return (
        <div>
            <Container>
                {/* esto es para hacer espacio y presionar los componentes hacia abajo */}
                <Row xs={1} md={2}>
                    <Col>z</Col>
                    <Col>z</Col>
                    <Col>z</Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col>z</Col>
                    <Col>z</Col>
                    <Col>z</Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col>z</Col>
                    <Col>z</Col>
                    <Col>z</Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col>z</Col>
                    <Col>z</Col>
                    <Col>z</Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col>z</Col>
                    <Col>z</Col>
                </Row>

                <Row>
                    <Col>
                        <h3 id="about">
                            Pallet305 is a company that was born in 2019, it specializes in creating, designing and modifying outdoor furniture, our product is exported from Spain, which is certified and treated.
                        </h3>
                    </Col>
                    <Col>
                        <img src='' alt='' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src='' alt='' />
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
                        <img src='' alt='' />
                    </Col>
                </Row>
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