import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'

import '../img/logo.png'

import '../../styles/header.css'

export const Header = () =>{
    return (
        <div>
            <div className='row' id='div-logo'>
                <img src='/logo.png' alt='logo' id='logo' />
            </div>
            <div className='row'>
                <div className='col-10'></div>
                <div className='col-2'> <a href="https://www.facebook.com/Pallet305"><FaFacebookF/></a> <a href="https://www.instagram.com/pallet_305/"><FaInstagram/></a>  <ImWhatsapp /> </div>
            </div>
        </div>
    )
}