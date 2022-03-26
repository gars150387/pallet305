import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export const Header = () =>{
    return (
        <div>
            <div className='row'>
                <p>LOGO</p>
            </div>
            <div className='row'>
                <div className='col-10'></div>
                <div className='col-2'><FaFacebookF/> <FaInstagram/> </div>
            </div>
        </div>
    )
}