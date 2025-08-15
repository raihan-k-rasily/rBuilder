import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div id='footer' className='d-flex justify-content-center align-items-center text-lignt '>
     
  
      <div className='text-center'>
        <h1>Contact</h1>
        <h4><MdEmail />rbuilder@gmail.com</h4>
        <h4><FaPhoneAlt />984567767</h4>
        <h4>Connect with Us</h4>
        <div className='d-flex justify-content-center fs-4 mt-3'>
        <IoLogoWhatsapp className='me-3'/>
        <FaFacebook className='me-3' />
        <RiInstagramFill />

        </div>
        <p className='mt-3'>Designed & built with  using react</p>

      </div>

    </div>
  )
}

export default Footer