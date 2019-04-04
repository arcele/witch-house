import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="witchhouse.png" alt="Witch House" class="loading-logo" />
          <div class="loader">
            <svg class="circular-loader"viewBox="25 25 50 50" >
              <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#111111" stroke-width="2" />
            </svg>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
