import React, {Component} from 'react';
// import logo from './krrdTkFy01.svg';
import './App.css';
import News from './news.js'

class Homee extends Component{
  render() {
    return(
      <div>
        <h1>What's new on KoolShibaCoding?</h1>
        <News />
      </div>
    );
  }
}

export default Homee;