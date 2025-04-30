import React from 'react'
// import logo from './img/logo.png';
import './Footer.css'


export default function navbar() {
    return (
        <footer> 
        <div className="footer-links">
          <div>About Us</div> |
          <div>Terms & Conditions</div> |
          <div>Privacy Policy</div> |
          <div>Contact Us</div> |
          <div>FAQs</div> |
          <div>Accessibility</div>
        </div>
        <div className="social-media-icons">
          <div>
            <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" />
          </div>
          <div>
            <img src="https://img.icons8.com/color/48/000000/pinterest.png" alt="Pinterest" />
          </div>
          <div>
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
          </div>
        </div>
      </footer>
    )
}