import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="logo_box">
            <div className="logo"></div>
          </div>
          <div className="tabs_box">
            <div className="tab_name">Products</div>
            <div className="tab_name">Resources</div>
            <div className="tab_name">Support</div>
            <div className="tab_name">Events</div>
            <div className="tab_name">Developer</div>
          </div>
          <div className="contact_box">
            <div className="accounts">
              View Accounts
            </div>
            <div className="contact">
              Contact Sales
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
