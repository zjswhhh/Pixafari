import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./UserTrip.css";

class UserTrip extends Component {
  render() {
    return (
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
                      <h2>San Francisco</h2>
                  </div>

                  <div className="trip-vote">
                      <span><i class="fa fa-check"></i> 3 out of 5 member voted</span>
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
        </div>
    );
  }
}

UserTrip.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};


export default UserTrip;
