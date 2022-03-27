import React from "react";
import { ContactForm } from "../component/ContactForm";

import { Container, Row, Col } from "react-bootstrap";

import '../../styles/contact.css'

export const Contact = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}><h3 id="contact-title">For quotation and questions, please contact us.</h3></Col>
                <Col></Col>
            </Row>
            <Row fluid="md">
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container >
    )
}