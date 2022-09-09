import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/sub-react" : "/subapp/sub-react";

function App() {
  return (
     <Router basename={BASE_NAME}>
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
     </Router>
  );
}

export default App;
