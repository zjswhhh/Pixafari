import React, { Component } from "react";
import Form from "react-validation/build/form";

import "./Plan.css";
import "../Button/Button.css";
import Navbar from "../Navbar/Navbar";
import Input from "react-validation/build/input";

class Plan extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="plan_container">
          <Form>
            <div className="form-group">
              <label>Trip Name</label>
              <input
                className="effect-2"
                type="text"
                name="TripName"
                placeholder="Try 'San Francisco'"
              />
            </div>

            <div className="form-group">
              <label>Date Range</label>
              <div>
                <input type="date" name="date" />
              </div>
            </div>

            <div className="form-group">
              <label>Budget</label>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="$300"
                    checked={true}
                  />
                  $300
                </label>
              </div>

              <div className="radio">
                <label>
                  <input type="radio" name="budget" value="$200" />
                  $200
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Trip Type</label>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="TripType"
                    value="family"
                    checked={true}
                  />
                  Family
                </label>
              </div>

              <div className="radio">
                <label>
                  <input type="radio" name="TripType" value="fun" />
                  Fun
                </label>
              </div>
            </div>
            {/* <span class="focus-border">dddd</span> */}
          </Form>
        </div>
        <div className="content row" />
      </div>
    );
  }
}

export default Plan;
