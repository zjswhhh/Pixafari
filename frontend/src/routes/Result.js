import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";

import "./Result.css";

class Result extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div className="background">
      <Navbar / >

      <div className="result-container">

      <div className="result-title ">
         <h2>San Francisco Vote Result</h2>
      </div>

      <div className="result-date">
          <span><h4>Date Range: </h4> 4/6/18 - 17/6/18</span>
      </div>

       <div className="result-budget">
          <span><h4>Budget: </h4> $500</span>
      </div>

      <div className="result-destination">
          <span><h4>Destination: </h4> San Francisco</span>
      </div>

      <div className="result-triptype">
          <span><h4>Trip Type: </h4>Fun</span>
      </div>

       <div>
          <button
            type="button"
            class="btn btn-primary btn-lg"
          >
            Done
          </button>
        </div>

    </div>

    </div>
    );
  }
}

export default Result;
