import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <img className="logo" src="" />
        <ul>
          <li>DASHBOARD</li>
          <li>CHART</li>
        </ul>
        <div>LOGOUT</div>
      </header>
    );
  }
}

export default Header;
