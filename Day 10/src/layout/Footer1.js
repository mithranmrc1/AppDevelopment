import React from 'react'
import { Link } from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import '../layout/Footer.css'
function Footer() {
  return (
    <div className='footer1'>
<footer class="flex-rw">
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">Inspiration</h4></li>
    <li><a class="generic-anchor footer-list-anchor" >Online Pilates</a></li>
    <li><a class="generic-anchor footer-list-anchor" >Yoga gor Beginners</a></li>
  </ul>
  <div className='line'></div>
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">About Us</h4></li>
    <li><a class="generic-anchor footer-list-anchor">Our Vision</a></li>
    <li><a class="generic-anchor footer-list-anchor">Our Mision</a></li>
    <li><a class="generic-anchor footer-list-anchor">Meet The Team</a></li>
    </ul>
    <div className='line'></div>
  <ul class="footer-list-top">
    <li id='help'>
      <h4 class="footer-list-header">PLEASE HELP ME</h4></li>
    <li><a class="generic-anchor footer-list-anchor" itemprop="significantLink">FAQs</a></li>
    <li><a class="generic-anchor footer-list-anchor" itemprop="significantLink">For Enquiry</a></li>
    <li><a class="generic-anchor footer-list-anchor">Raise a Complaint</a></li>
  </ul>
  <div className='line'></div>
  <ul className='footer-list-top'>
  <li>
  <h4 class="footer-list-header">FOLLOW US ON:</h4></li>
  <li>
  <a class="generic-anchor footer-list-anchor" href='https:www.facebook.com'><FacebookIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https:www.instagram.com'><InstagramIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https:www.linkedin.com'><LinkedInIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https:www.printerest.com'><PinterestIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https:www.youtube.coom'><YouTubeIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https:www.telegram.com'><TelegramIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https:www.twitter.com'><TwitterIcon fontSize='medium'/></a>
  </li>
  <br/>
  <li>
  <a id='contact' class="generic-anchor footer-list-anchor"><CallIcon fontSize='small' className='icon'/>   +91 7895461230  </a>
  </li>
  <br/>
  <li>
  <a id='locator' class="generic-anchor footer-list-anchor"><MapIcon fontSize='small' className='icon'/>  SKCT, Kovaipudur, <br/>&nbsp; Coimbatore, TN 641042</a>
  </li>
  </ul>
</footer>
<section className='small'>
<Link to='/Privacy'><p className='priv'>Privacy Policy</p></Link>
<div className='line1'></div>
<Link to='/Terms'><p className='priv1'>Terms & Conditions</p></Link>
<div className='line1'></div>
Cookie Center
<div className='line1'></div>
Security & Safety
<div className='line1'></div>
Dont sell Personal Information
<div className='line1'></div>
© 2023 ABC Corporation
</section>
    </div>
  )
}
export default Footer