import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import FamousPeople from './components/FamousPeople.js'

class App extends Component {

  // Should not be arrow function, renders component on the DOM
  render() {
    return (
      // Enclosing tag
      <div className="App">
        {/* Creates an instance of Header and displays it */}
        <Header/>
        <p>This is paragraph text.</p>
        <FamousPeople/>
      </div>
    );
  }
}
            

export default App;
