import React, { Component } from "react";
import "./Header.scss";
import verseImg from "../../assets/images/verse.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <img className="logo" src={verseImg} alt="Verse" />
        <ul className="nav">
          <li>
            <NavLink to="/logs">DASHBOARD</NavLink>
          </li>
          <li>
            <NavLink to="/chart">CHART</NavLink>
          </li>
        </ul>
        <ul className="options">
          <li>
            <NavLink to="/login">LOGOUT</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
