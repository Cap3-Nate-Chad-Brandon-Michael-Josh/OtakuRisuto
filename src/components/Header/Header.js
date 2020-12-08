import React from "react";

import { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import OtakuContext from "../../contexts/OtakuContext";
import "./Header.css";

class Header extends Component {
  static contextType = OtakuContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  render() {
    return (
      <section className="Header">
        <div className="headerTitle">
          <nav className="DashNav">
            <SearchBar />
            <div className="headerLogout sign-out">
              <Link
                aria-label="Logout"
                onClick={this.handleLogoutClick}
                to={"/"}
              >
                <span className="sign-out">
                  <i className="fas fa-sign-out-alt"></i>
                </span>
              </Link>

              <h3 className="user">{this.context.user.username}</h3>
            </div>
          </nav>
          <Link className="MainTitle" to={"/home"}>
            <h1 className="OR">OtakuRisuto</h1>
          </Link>
        </div>
      </section>
    );
  }
}

export default Header;
