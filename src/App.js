import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import User from './compoent/user';
import Det from './compoent/det';
import Home from './compoent/home';

import './App.css'; 

class App extends Component { 
render() { 
	return ( 
	<Router> 
		<div className="App"> 
		<ul>
     <li><  Link to="/" classNmae="active">Home</Link></li>
      <li>< Link to="/user" >User</Link></li>
     < li>< Link to="/det">Details</ Link></li>
    </ul>
			<Switch> 
			<Route exact path='/' component={Home}></Route> 
			<Route exact path='/user' component={User}></Route> 
			<Route exact path='/det' component={Det}></Route> 
			</Switch> 
		</div> 
	</Router> 
); 
} 
} 

export default App; 
