import React from 'react';
import '../layout/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  
    <footer className="footer">
      <div className="footer-content">
      <h2>
            <Link to='/que'><div className="continue-btn">Back</div></Link></h2>
        <div className="footer-section">
       
          <h3>Address</h3>
          <p>123 Main Street<br />City, State<br />Postal Code</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="o">
              <FacebookIcon />
            </a>
            <a href="o">
              <TwitterIcon />
            </a>
            <a href="o">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: example@example.com<br />Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer