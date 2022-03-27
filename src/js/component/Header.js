import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import '../img/logo.png'
import '../img/officalLogo.jpg'

import '../../styles/header.css'

export const Header = () => {
    return (
        <Container>
            <Row>
                <Col><img src='/officalLogo.jpg' alt='logo' id='logo' /></Col>
                <Col xs={5}></Col>
            </Row>
        </Container>
    )
}