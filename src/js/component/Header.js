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
                <Col><a href="https://www.facebook.com/Pallet305"><FaFacebookF id='icons'/></a> <a href="https://www.instagram.com/pallet_305/"><FaInstagram id='icons' /></a>  <ImWhatsapp id='icons' /></Col>
            </Row>
        </Container>



        // <div>
        //     <div className='row' id='div-logo'>

        //     </div>
        //     <div className='row'>
        //         <div className='col-10'></div>
        //         <div className='col-2'>  </div>
        //     </div>
        // </div>
    )
}