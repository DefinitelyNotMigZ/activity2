import React from 'react';
import './design.css';

function Navbar() {
  return (
      <><link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
      <nav className="navbar">
          <div>
              <a href="https://example.com">
                  <img src='pic1.jpg' alt='redragon logo' className="pic1" />
              </a>
          </div>
          <div className='header'>
              <a href="#">
                <img src='redragonlogo.png' alt='redragon logo' style={{ width: '95px', height: '90px' }} className="logo"/>
              </a>
              <ul className='ul1'>
                <div className='product'>
                  <li><a href="#"><b>PRODUCTS</b></a></li>
                  </div>
                  <div className='downloads'>
                  <li><a href="#"><b>DOWNLOADS</b></a></li>
                  </div>
                  <div className='support'>
                  <li><a href="#"><b>SUPPORT</b></a></li>
                  </div>
                  <div className='launch'>
                  <li><a href="#"><b>NEW LAUNCH</b></a></li>
                  </div>
                  <input className='input' placeholder='Search'></input>
                  <a href='#'>
                    <img src='searchlogo.png' alt='search' style={{ width: '25px', height: '25px' }} className='search'/>
                  </a>
                  <select className='select'>
                    <option>English</option>
                    <option>Chinese-Traditional</option>
                    <option>Polski</option>
                    <option>French</option>
                    <option>Korean</option>
                    <option>Japanese</option>
                    <option>Indian</option>
                  </select>
              </ul>
            </div>
            <div className='keyboard'>
             <img src='keyboard.png' alt='Keyboard Pic' />
            <span className='textOverlay'>KEYBOARD</span>
            </div>
      </nav></>
  );
}

export default Navbar;