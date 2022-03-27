import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'

import { Container, Row, Col } from 'react-bootstrap'

import '../img/logo.png'

import '../../styles/header.css'

export const Header = () => {
    return (
        <Container>
            <Row>
                <Col><img src='/logo.png' alt='logo' id='logo' /></Col>
                <Col xs={5}></Col>
                <Col>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='icons' /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='icons' /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='icons' /></a>
                </Col>
            </Row>
        </Container>
    )
}