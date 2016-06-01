import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;

const Links = () =>
  <nav>
    <Link to='/'>Home <br /> </Link>
    <Link to='/about'>About <br /> </Link>
    <Link to='/contact'>Contact <br /> </Link>
  </nav>

class App extends React.Component{
  render(){
    return(
      <Router history={ hashHistory }>
        <Route path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
      </Router>
    );
  }
}

export default App
