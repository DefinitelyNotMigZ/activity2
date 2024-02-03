import React from 'react';
import './design.css';
import './App.css';
import Navbar from './Navbar';
import Data from './Data';
import Sort from './Sort';
import Footer from './Footer';

function App() {
  return (
    <body className='body'>
    <Navbar/>
    <Sort/>
    <Data/>
    <Footer/>
    </body>
  );
}

export default App;
