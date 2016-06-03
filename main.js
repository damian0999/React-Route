import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './app';
import About from './about'
import Contact from './contact'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'));
