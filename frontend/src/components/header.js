import React, {Component} from 'react';
import logo from './assets/russianshiba.svg';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends Component{
  render() {
    return(
    	<div>
     <header className="navbar">	
        <img className="LogoImg" src={logo} alt="failed to load"/>
        <h1 className="textofH">KoolShibaCoding</h1>
           <ul className="navBar">
           <a href="/" >
           <li className="list">Home</li>
           </a>
           <a href="/about">
           <li className="list">About</li>
           </a>
           <a href="https://discord.gg/PFXnwUJ">
           <li className="list">Join Discord</li>
           </a>
           <a href="/form">
           <li className="list">Application</li>
           </a>
    </ul>
    </header>
    </div>
    );
  }
}

export default Header;