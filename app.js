import React from 'react';
import {Link} from 'react-router';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>React Router - Home</h1>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App
