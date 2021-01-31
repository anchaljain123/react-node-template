import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { browserHistory } from 'react-router';
import App from './App'


const Container = () => {
  return (
    <div>
      <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} >
        <App />
      </Router>
    </div>
  )
};

export default Container;