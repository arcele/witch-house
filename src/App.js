import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      displayNav: false
    }
  }

  activateLasers() {
    console.log('lasers activated')
    this.setState(state => ({
      loading: false
    }));
  }

  slideNav() {
    console.log('swapping:', this.state.displayNav)
    this.setState(state => ({
      displayNav: !this.state.displayNav
    }))
  }

  render() {
    let appClass = this.state.loading ? 'App loading' :'App';
    let navTrayClass = this.state.displayNav ? 'nav-tray' : 'nav-tray hide'
    console.log('navTrayClass:', navTrayClass)
    return (
      <div className={appClass} onClick={this.activateLasers.bind(this)}>
        <header className="App-header">
          <img src="witchhouse.png" alt="Witch House" className="logo" />
          <div class="nav-header">
            <div class="hamburger" onClick={this.slideNav.bind(this)}>
              <div class="nom"></div>
              <div class="nom"></div>
              <div class="nom"></div>
            </div>
          </div>
          <div className="loader">
            <svg className="circular-loader"viewBox="25 25 50 50" >
              <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#111111" strokeWidth="2" />
            </svg>
          </div>
        </header>
        <div className={navTrayClass}>
          <li>Artists</li>
          <li>Flash Events</li>
          <li>History</li>
          <li>Currency</li>
          <li>Link Account</li>
        </div>
      </div>
    );
  }
}

export default App;
