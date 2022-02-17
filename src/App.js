import './App.css';
import Main from './components/MainComponent'
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component {

  render(){
    return (
      <Router>
        <div>
          <Main />
        </div>
      </Router>
      
    );
  }
  
}

export default App;
