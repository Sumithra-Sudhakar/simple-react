import './App.css';
import React from 'react';
import img from './react-img.png'
function Header(){
    return (
       <div className='Head'>
          <header ><nav className='nav'> 
       <img src={img}  className='img'></img>
       
       <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
       </nav></header>
       </div>
    )
 }
 export default Header;