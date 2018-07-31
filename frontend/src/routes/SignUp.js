import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

import { isEmail } from 'validator';
import Navbar from '../Navbar/Navbar';
import './SignIn.css'


const required = (value, props) => {
  if (!value || (props.isCheckable && !props.checked)) {
    return <span className="form-error is-visible">Required</span>;
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <span className="form-error is-visible">
        ${value} is not a valid email.
      </span>
    );
  }
};

const isEqual = (value, props, components) => {
  const bothUsed =
    components.password[0].isUsed && components.confirm[0].isUsed;
  const bothChanged =
    components.password[0].isChanged && components.confirm[0].isChanged;

  if (
    bothChanged &&
    bothUsed &&
    components.password[0].value !== components.confirm[0].value
  ) {
    return (
      <span className="form-error is-visible">Passwords are not equal.</span>
    );
  }
};


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: String,
      password: String,
      redirect: false
    };
  }

  handleClick = () => {
    this.form.validateAll();
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(event);
  };

  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div className="background">
        <Navbar />
        <Form>
          <div className="signin-container">
            <div>
              <h3>Sign Up</h3>
            </div>
            <div className="form-group">
              <Input
                onChange={this.onChange.bind(this)}
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                validations={[required, email]}
              />
            </div>
            <div className="form-group">
              <Input
                onChange={this.onChange.bind(this)}
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                validations={[required, isEqual]}
              />
            </div>
            <div className="form-group">
              <Input
                onChange={this.onChange.bind(this)}
                className="form-control"
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                validations={[required, isEqual]}
              />
            </div>
            <div className="form-group textCenter">
              <button
                type="button"
                className="button"

              >
                Signup
              </button>
            </div>

            <p>
              Already have an account? <Link to="/signin">Login here</Link>.
            </p>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUp;
