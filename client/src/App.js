import React, { Component } from 'react';
import logo from './styles/gitlab.png';
import './styles/App.css';
// import { Link } from 'react-router-dom';


class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">







          <img src={logo} className="App-logo" alt="logo" />
         
          <a className="App-link" id="loginButton" href="http://localhost:5000/auth"> Connect to Gitlab </a>
        </header>
      </div>
    );
  }
}

export default App;
