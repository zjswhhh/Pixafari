import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Home.css";
import "../Button/Button.css";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";

class Home extends Component {
  constructor() {
    super();
    // this.state = {
    //   isHidden: true,
    //   posts: [],
    //   redirect: false
    // };
  }

  render() {
    // if (this.state.redirect) {
    //   return <Redirect to="/" />;
    // }
    // let posts = [];
    // if (this.state) {
    //   posts = this.state.posts;
    // }

    return (
      <div>
        <Navbar />
        <Jumbotron />

        <div className="content row" />
      </div>
    );
  }
}

export default Home;
