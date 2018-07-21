import React, {
  Component
} from "react";
import Form from "react-validation/build/form";

import "./Plan.css";
import Button from  "../Button/Button";
import Navbar from "../Navbar/Navbar";
import Input from "react-validation/build/input";
import Modal from "../Modal/Modal";

class Plan extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div className="background">
        <Navbar / >
        <div className = "plan-container" >

          {/* button triggering invite modal */}
          <div className= "row p1">

                <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                      Invite
                </button>

              <div className="plan-profile-link">
                <button className="btn btn-primary">
                <a href="/profile">My Profile <i className="fa fa-user"></i></a>
                </button>
              </div>
          </div> {/* row p1 ends */}

          {/* invite modal */}
          <Modal title="Invite others" body={[
            <label for="modal-invite">
              <div>People</div>
               <input
                type="text"
                className="form-control modal-invite"
                placeholder="Enter email addresses..."
                />
            </label>

            ]}/>


          <div  className= "row p2">
            <div className = "form-group col-sm" >
              <label > Trip Name </label>
              <input
              className = "effect-2" /* className for form style */
              type = "text"
              name = "TripName"
              placeholder = "Try 'San Francisco'"
              />
            </div>
          </div> {/* row p1 ends */}

          <div  className= "row p3">
            <div className = "form-group col-sm" >
              <label > Date Range </label>
              <div>
              <input
               type = "date"
               name = "date" />
              </div>
            </div >

            <div className = "form-group col-sm">
              <label> Budget </label>
              <div className = "radio">
                <label >
                  <input
                  type = "radio"
                  name = "budget"
                  checked = {true}
                  />
                $300 </label>
               </div>

              <div className = "radio" >
                <label >
                  <input
                  type = "radio"
                  name = "budget"
                  />
                  $200
                </label>
              </div >
          </div>

          <div className = "form-group col-sm">
              <label> Destination </label>
              <div className = "radio">
                <label >
                  <input
                  type = "radio"
                  name = "destination"
                  checked = {true}
                  />
                San Francisco </label>
               </div>

              <div className = "radio" >
                <label >
                  <input
                  type = "radio"
                  name = "budget"
                  />
                  other
                </label>
              </div >
          </div>

          <div className = "form-group col-sm" >
            <label > Trip Type </label>
            <div className = "radio" >
                <label >
                  <input type = "radio"
                  name = "TripType"
                  value = "family"
                  checked = {true}
                  />
                  Family
                </label>
            </div >
            <div className = "radio" >
                <label >
                <input type = "radio"
                name = "TripType"
                value = "fun" />
                Fun
                </label>
            </div>
          </div>
        </div> {/*row p3 ends*/}

        <div classname="row p4">
          <button
            type="button"
            class="btn btn-primary btn-lg"
          >
            Done
          </button>
        </div> {/*row p4 ends*/}

        </ div > {/* Plan Container ends */}


      </div>
  );
}
}

export default Plan;
