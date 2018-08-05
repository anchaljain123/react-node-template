import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import DashBoard from '../DashBoard';

/*
Stateless Component
 */
const App = () => {
	return (
		<div id="wrap">
			<Route exact path="/" component={Login} />
			<Route path="/signup" component={Signup}/>
      		<Route path="/dashboard" component={DashBoard}/>
		</div>
	);
};

export default App;
