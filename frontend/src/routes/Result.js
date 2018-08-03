import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";

import "./Result.css";

class Result extends Component {
  constructor() {
    super();
  }

  state = {
    trips: [],
    trip: {
      groupID: '',
      trip_name: '',
      start_date: '',
      end_date: '',
      budget: 0,
      destination: '',
      trip_type: ''
    }
  }

  // componentDidMount() {
  //   this.getResult();
  // }

  getResult = _ => {
      const { trip } = this.state;
     fetch(`http://localhost:4000/results?trip_name=${trip.trip_name}`)
      .then(response => response.json())
      .then(response => this.setState({ trips: response.data }))
      .catch(err => console.error(err))
  }

  renderTrip = ({ groupID, trip_name, start_date, end_date, budget, destination, trip_type }) => 
      <div className="result-container">

      <div className="result-title ">
         <h2>{trip_name}</h2>
      </div>

      <div className="result-date">
          <span><h4>Date Range: </h4> {start_date} - {end_date}</span>
      </div>

       <div className="result-budget">
          <span><h4>Budget: </h4> ${budget}</span>
      </div>

      <div className="result-destination">
          <span><h4>Destination: </h4> {destination}</span>
      </div>

      <div className="result-triptype">
          <span><h4>Trip Type: </h4>{trip_type}</span>
      </div>

      </div>;
    
 

  render() {
    const { trips, trip } = this.state;
    return (
    <div className="background">
      <Navbar / >
        <div>
        Trip Name: 
         <input
           value={trip.trip_name}
           onChange={e => this.setState({ trip: {...trip, trip_name: e.target.value}})}
          />
          <button
            type="button"
            class="btn btn-primary btn-lg"
            onClick={this.getResult}
          >Get Result
          </button>
        </div>
      
      <div>
       {trips.map(this.renderTrip)} 
      </div>
    </div>
    );
  }
}

export default Result;
