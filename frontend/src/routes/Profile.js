import React, { Component } from "react";
import UserTrip from "../UserTrip/UserTrip"
import Navbar from "../Navbar/Navbar";

import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();
  }

  state = {
    profiles : [],
    profile: {
      groupID: '',
      trip_name: '',
      votes: '',
      total: ''
    }
  }

  getProfile = _ => {
      const { profile } = this.state;
      fetch(`http://localhost:4000/profile?userName=${profile.userName}`)
      .then(response => response.json())
      .then(response => this.setState({ profiles: response.data }))
      .catch(err => console.error(err))
  }

  renderProfile = ({ groupID, trip_name, votes, total }) => 
  <div className="trip-container row">
            <div className="trip-left col-sm-4">
                   <div className="trip-image">
                        <img
                          src="https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/1200/600/90/secure.parksandresorts.wdpromedia.com/media/abd/refresh/north-america/san-francisco-tours/adventures-by-disney-north-america-san-francisco-long-weekend-hero-01-golden-gate-bridge.jpg"
                          alt="San Francisco"
                          width="110%"
                          height="160em"
                        />
                  </div>
            </div>

            <div className="trip-center col-sm-5">
                  <div className="trip-title">
                      <h2>{trip_name}</h2>
                  </div>

                  <div className="trip-vote">
                      <span><i class="fa fa-check"></i> {votes} out of {total} member voted</span>
                 </div>

                 <div className="trip-result">
                      <span><i class="fa fa-eye"></i><a href="/result"> See result</a></span>
                 </div>
             </div>

             <div className="trip-right col-sm-3">
                  <div className="trip-edit">
                    edit  <i class="fa fa-pencil"></i>
                  </div>

                  <div className="trip-reminder">
                    <span>send reminder  <i class="fa fa-envelope"></i> <span className="glyphicon glyphicon-envelope"></span></span>
                  </div>
             </div>
        </div>;


  render() {
    const {profiles, profile} = this.state;
    return (
    <div>
      <Navbar / >
        User Name: 
         <input
           value={profile.userName}
           onChange={e => this.setState({ profile: {...profile, userName: e.target.value}})}
          />
          <button
            type="button"
            class="btn btn-primary btn-lg"
            onClick={this.getProfile}
          >Get Profile
          </button>
      
      <div>
       {profiles.map(this.renderProfile)} 
      </div>

    </div>
    );
  }
}

export default Profile;
