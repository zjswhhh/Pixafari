import React, { Component } from "react";
import "./FormInput.css";
import Input from "react-validation/build/input";
import PropTypes from "prop-types";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: "", name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Form Filled: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Input
        className="MyInput effect-2"
        type="text"
        placeholder={this.props.placeholder}
        name={this.props.name}
        onChange={this.handleChange}
      />
    );
  }
}

FormInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string
};

export default FormInput;
