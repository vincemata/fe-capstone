import React from 'react'
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";


export default function Footer() {
  return (
        <div id='container-footer'>
            <div className='details-site'>
                <div className='menu'>
                    <h3>Menu</h3> 
                    <a href="http://localhost:3000/">Home</a>
                    <a href="http://localhost:3000/">Products</a>
                    <a href="http://localhost:3000/">About Us</a>
                    <p className='copyright'>COPYRIGHT © 2022 ALL RIGHTS RESERVED</p>
                </div>
                <div className='description-site'>
                    <p className='description-msg'>WE’RE HAPPY TO HELP YOU OUT, SEND US A MESSAGE</p>
                    <p className='site-email'>splatoon@example.com.</p>
                    <p>This is a demo store to show how Splatoon works. </p>
                    <p>You can personalize any of your products.</p>
                    <p>The images and 3D models are by way of example but not limited to.</p>
                </div>
                <div className='social-links'>
                    <h3>SOCIAL LINKS</h3> 
                    <a href="a"> <AiFillFacebook/></a>
                    <a href="a"><AiFillLinkedin/></a>
                    <a href="a"><AiOutlineInstagram/></a>
                    <a href="a"><AiFillTwitterSquare/></a>
                </div>
            </div>
        </div>
  )
}
