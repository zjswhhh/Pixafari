import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import './Home.css'
import './SignIn.css'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: String,
      password: String,
      redirect: false,
    };
  }

  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div className="background">
        <Navbar />

        <div className="signin-container">
          <h3>Login to continue</h3>

          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              // validations={[required, email]}
              onChange={this.onChange.bind(this)}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              // validations={[required]}
              onChange={this.onChange.bind(this)}
              placeholder="Password"
            />
          </div>
          <div className="form-group textCenter">
            <button className="button">
              Login
            </button>
          </div>
          <p>
            Don't have an account? <NavLink to="/signup">Sign up now</NavLink>.
          </p>
        </div>
      </div>
    );
  }
}
export default SignIn;
