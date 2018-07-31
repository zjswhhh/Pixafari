import React, { Component } from "react";
import UserTrip from "../UserTrip/UserTrip"
import Navbar from "../Navbar/Navbar";

import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div>
      <Navbar / >

      <div className="profile-container">

      <div className="row profile-row-1 profile-icon">

         <a href="/profile">Angela <i className="fa fa-user"></i></a>

      </div>

      <div className="row profile-row-2">

        <UserTrip/>
           <div className=""></div>

      </div>

      <div className=""></div>

      </div> {/* Profile Container */}



    </div>
    );
  }
}

export default Profile;
