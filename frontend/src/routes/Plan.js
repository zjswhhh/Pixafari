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
  
  state = {
    trips: [],
    trip: {
      trip_name: 'test',
      start_date: '2019-01-01',
      end_date: '2019-12-01',
      budget: 0,
      destination: 'San Francisco',
      trip_type: 'family'
    }
  }
    
  componentDidMount() {
    // this.getTrips();
  }
    
  // getTrips = _ => {
  //   fetch('http://localhost:4000/trips')
  //   .then(response => response.json())
  //   .then(response => this.setState({ trips: response.data }))
  //   .catch(err => console.error(err))
  // }

  addTrip = _ => {
        const { trip } = this.state;
        fetch(`http://localhost:4000/trips/add?trip_name=${trip.trip_name}&start_date=${trip.start_date}&end_date=${trip.end_date}&budget=${trip.budget}&destination=${trip.destination}&trip_type=${trip.trip_type}`)
        .then(response => response.json())
        // .then(this.getTrips)
        .catch(err => console.error(err))
  }     

    
  renderTrip = ({ groupID, trip_name, start_date, end_date, budget, destination, trip_type}) => <div key={groupID}>{trip_name, start_date, end_date, budget, destination, trip_type}</div>
  
    
  render() {
    const { trips, trip } = this.state;
    return (
      <div>
        <Navbar />
        <div className="plan_container">
          <Form>

            <div className="form-group">
              <label>Trip Name</label>
              <input
                value={trip.trip_name}
                onChange={e => this.setState({ trip: { ...trip, trip_name: e.target.value}})}
                className="effect-2"
                type="text"
                name="TripName"
                placeholder="Try 'San Francisco'"
              />
            </div>

            <div className="form-group">
              <label>Depart Date</label>
              <div>
                <input 
                  type="date" 
                  name="date" 
                  value={trip.start_date}
                  onChange={e => this.setState({ trip: { ...trip, start_date: e.target.value}})}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Return Date</label>
              <div>
                <input 
                  type="date" 
                  name="date" 
                  value={trip.end_date}
                  onChange={e => this.setState({ trip: { ...trip, end_date: e.target.value}})}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Budget</label>
              <div>
              <input 
                value={trip.budget}
                onChange={e => this.setState({ trip: { ...trip, budget: e.target.value}})}
              />
              </div>
            </div>

            <div className="form-group">
              <label>Destination</label>
                <div>
                  <input
                    value={trip.destination}
                    onChange={e => this.setState({ trip: { ...trip, destination: e.target.value}})}
                  />
                </div>
            </div>

            <div className="form-group">
              <label>Trip Type</label>
                <div>
                  <input
                    value={trip.trip_type}
                    onChange={e => this.setState({ trip: { ...trip, trip_type: e.target.value}})}
                  />
                </div>
            </div>
            <button onClick={this.addTrip}>Add Trip</button>
            {/* <span class="focus-border">dddd</span> */}
          </Form>
        </div>
        <div className="content row" />
      </div>
    );
  }
}

export default Plan;
