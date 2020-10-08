import React, {Component} from 'react';
// import logo from './krrdTkFy01.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './header.js';
import About from './about.js';
import ReactDOM from 'react-dom';
import Homee from './home.js'
import Admin from './newsAdmin.js'
import Form from './form.js';
import Footer from './footer.js';
// import Home from './home.js'

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <header className="header">
           <Header />
      </header>           
      <Switch>
           <Route path='/' exact component={Homee} />
           <Route path='/about' component={About} />
           <Route path='/newsadmin' exact component={Admin}/>
           <Route path='/form' exact component={Form} />
           </Switch>
           <footer className="footer">
             <Footer />
           </footer>
          </div>
    </Router>
  );
}
}

const Home = () => (
    <div>
      <h1>
        Hello!
      </h1>
    </div>
    );
  


ReactDOM.render(<App />, document.querySelector('#app'));