import React, { Component } from "react";
import "./Jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Organize Your Group Travel</h1>
        <p className="lead">Faster, Easier and Happier than before</p>
        <p className="">
          <a className="btn btn-primary btn-lg" href="/plan" role="button">
            Start Here!
          </a>
        </p>
      </div>
    );
  }
}

export default Jumbotron;
