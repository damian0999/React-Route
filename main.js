import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './app';
import About from './about'
import Repos from './repos'
import Repo from './repo'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/repos' component={Repos}/>
      <Route path='repos/:userName/:repoName' component={Repo} />
      <Route path='/about' component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));
