import React from 'react'
import classes from './Footer.module.css'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { TbBrandYoutubeFilled } from 'react-icons/tb';





function Footer() {
  return (
    <div className={classes.container}>
        <div className={classes.logo}>lOGO</div>
        <div className={classes.footernavigation}>
        <div>
            <h3>Company</h3>
            <ul>
                <li>About us</li>
                <li>Support</li>
                <li>Blog</li>
                <li>Login</li>
                <li>SignUp</li>
                <li>Contact us</li>
            </ul>
          </div>
            <div>
            <h3>Program</h3>
            <ul>
                <li>Affiliate Program</li>
                <li>Ambassador Program</li>
                <li>Partnership Program</li>
                
            </ul>
            </div>
            <div>
            <h3>Policy</h3>
            <ul>
                <li>Legal</li>
                <li>DMCA</li>
                <li>USC 2257</li>
                <li>Privacy Policy</li>
                <li>Terms  and Conditions</li>
            </ul>
            </div>
            <div>
            <h3>Follow Us</h3>
            <ul className={classes.icons}>
                <li><BsFacebook></BsFacebook></li>
                <li><BsTwitter></BsTwitter></li>
                <li><BsInstagram></BsInstagram></li>
                <li><TbBrandYoutubeFilled></TbBrandYoutubeFilled></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;