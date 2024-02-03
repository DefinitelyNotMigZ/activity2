import React from 'react';
import './design.css'; 

function Footer() {
    return (
        <footer className="footer1">
            <div className='iconfooter'>
            <img src="facebook.png" alt="icon1" className="icon1" />
            <img src="twitter.png" alt="icon2" className="icon2" />
            <img src="pinterest.png" alt="icon3" className="icon3" />
            <img src="youtube.png" alt="icon4" className="icon4" />
            <img src="line.png" alt="icon5" className="icon5" />
            </div>
            <div className='about'>
                <a href="#"><b>ABOUT US</b></a>
            </div>
            <div className='contact'>
                <a href="#"><b>CONTACT US</b></a>
            </div>
            <div className='span1'>
                <span>
                © 2024, REDRAGON ZONE. All rights reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;