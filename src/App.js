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
    let hamburgerClass = this.state.displayNav ? 'hamburger open' : 'hamburger'
    return (
      <div className={appClass} onClick={this.activateLasers.bind(this)}>
        <header className="App-header">
          <div class="nav-header">
            <div class={hamburgerClass} onClick={this.slideNav.bind(this)}>
              <div class="nom"></div>
              <div class="nom"></div>
              <div class="nom"></div>
            </div>
            <img src="witchhouse.png" alt="Witch House" className="logo" />
          </div>
          <div className="loader">
            <img src="witchhouse.png" alt="Loading Witchhouse" className="loadingLogo" />
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
        <div class="main">
          <div className="lights on">
            <div className="text">
            Lights on, swing on by the shop to talk about your ideas and check for walk in availability
            </div>
          </div>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut erat sapien. Etiam pharetra sollicitudin convallis. Etiam quis auctor quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In dapibus ultricies ex a molestie. Fusce sem dolor, posuere vel eros nec, rutrum condimentum nulla. Nunc ac felis sit amet ex iaculis aliquam vitae non elit. In egestas leo et tincidunt sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam blandit egestas metus, in commodo dui venenatis id.</p>

            <p>Quisque laoreet, neque vitae vestibulum fermentum, est orci aliquet arcu, vel fermentum enim sapien ut diam. Suspendisse sed cursus lacus, sit amet molestie justo. Suspendisse eget viverra tellus, quis euismod ligula. Proin sem elit, rhoncus vel purus sed, efficitur fermentum urna. Phasellus venenatis, justo et rutrum condimentum, urna diam interdum nulla, elementum euismod purus lectus eu neque. Nam suscipit finibus varius. Nullam faucibus elit sem, et tempor libero dignissim ut. Nulla imperdiet magna at mi tempor, interdum commodo ex pretium. Mauris in justo odio.</p>

            <p>Maecenas vulputate ex nec dui luctus fermentum. Fusce tristique erat vel consequat vestibulum. Quisque faucibus varius arcu, a fringilla turpis pellentesque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec imperdiet non dui lobortis porttitor. Nam lobortis dolor sed lectus tincidunt semper. In commodo eleifend metus sed venenatis. In hac habitasse platea dictumst. Nunc et sapien condimentum, ultricies odio nec, sagittis dui. Duis at vestibulum diam. Pellentesque blandit, massa a viverra interdum, neque massa gravida ipsum, ultricies venenatis augue risus nec sem. Donec lacinia ac nisl eget imperdiet. Nullam auctor at nisl quis posuere. Quisque tempus ipsum vitae convallis malesuada. Sed tristique nunc nisi, id dictum nisi accumsan in. Pellentesque consequat sapien lobortis metus efficitur eleifend.</p>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
