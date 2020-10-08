import React, {Component} from 'react';
import logo from './assets/russianshiba.svg';
import { Link } from 'react-router-dom';
import './App.css';

class Footer extends Component{
  render() {
    return(
    	<div>
      <div className="footerschild">
      <h1 className="footertext">proudly powered by <a className="footerhref" href="https://github.com/django/django">Django</a> and 
      <a className="footerhref" href="https://github.com/facebook/react">React</a></h1>
      </div>
    </div>
    );
  }
}

export default Footer;