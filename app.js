import React from 'react';
import {Link} from 'react-router';
import NavLink from './NavLink'

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>React Router - Home</h1>
        <ul>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App
