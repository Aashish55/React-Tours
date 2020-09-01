import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Notification from "../Notification/Notification";

class Registration extends Component {
  state = {
    fullName: "",
    userName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    countryCode: "",
    password: "",
    passwordConfirmation: "",
    latitude: null,
    longitude: null,
    errors: [],
    top: -100,
  };

  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Not Available");
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      console.log("ready to post");
      this.setState({ errors: [] });

      const registrationData = {
        name: this.state.fullName,
        username: this.state.userName,
        gender: this.state.gender.toUpperCase(),
        dob: this.state.dob,
        email: this.state.email,
        phoneNumber: this.state.phone,
        countryCode: this.state.countryCode,
        password: this.state.password,
        confirmPassword: this.state.passwordConfirmation,
        latitude: this.state.latitude.toString(),
        longitude: this.state.longitude.toString(),
      };
      axios
        .post(
          "http://explore-it-main.herokuapp.com/api/v1/users",
          registrationData
        )
        .then((response) => {
          console.log(response.data);
          this.showNotification();
          this.clearDataFields();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  clearDataFields = () => {
    this.setState({
      fullName: "",
      userName: "",
      gender: "",
      dob: "",
      email: "",
      phone: "",
      countryCode: "",
      password: "",
      passwordConfirmation: "",
    });
  };

  showNotification = () => {
    this.setState({ top: 16 }, () => {
      setTimeout(() => {
        this.setState({ top: -100 });
      }, 3000);
    });
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({
    fullName,
    userName,
    gender,
    dob,
    email,
    phone,
    countryCode,
    password,
    passwordConfirmation,
  }) => {
    return (
      !fullName.length ||
      !userName.length ||
      !gender ||
      !dob ||
      !email.length ||
      !phone.length ||
      !countryCode.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = (errors) =>
    errors.map((error, i) => (
      <p key={i} className="errorMessage">
        {error.message}
      </p>
    ));

  handleChange = (event) => {
    if (event.target.name === "dob") {
      this.setState({ dob: Date.now().toString() });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    const {
      fullName,
      userName,
      dob,
      email,
      phone,
      countryCode,
      password,
      passwordConfirmation,
      errors,
      top,
    } = this.state;

    return (
      <React.Fragment>
        <div className="section">
          <div className="leftPart">
            <div className="textArea">
              <h1>ExploreIT</h1>
              <p className="secondary_text">Some Text Here...</p>
            </div>
            <h2 className="arrowRight"> &rsaquo; </h2>
          </div>
          <form className="form" onSubmit={this.handleSubmit}>
            <h3>Registration</h3>

            <h4>Full Name</h4>
            <input
              className="input"
              name="fullName"
              onChange={this.handleChange}
              value={fullName}
              type="text"
            />

            <h4>Username</h4>
            <input
              className="input"
              name="userName"
              onChange={this.handleChange}
              value={userName}
              type="text"
            />

            <h4>Gender</h4>
            <div className="gender">
              <label className="genderLabel">
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  onChange={this.handleChange}
                  className="radio"
                />
                Male
              </label>
              <label className="genderLabel">
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={this.handleChange}
                  className="radio"
                />
                Female
              </label>
            </div>

            <h4>Date of Birth</h4>
            <input
              className="input"
              value={dob}
              name="dob"
              onChange={this.handleChange}
              type="text"
            />

            <h4>Email</h4>
            <input
              className="input"
              name="email"
              onChange={this.handleChange}
              value={email}
              type="email"
            />

            <h4>Phone Number</h4>
            <input
              className="input"
              type="number"
              name="phone"
              onChange={this.handleChange}
              value={phone}
            />

            <h4>Country Code</h4>
            <input
              className="input"
              value={countryCode}
              onChange={this.handleChange}
              name="countryCode"
              type="text"
            />

            <h4>Password</h4>
            <input
              className="input"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
            />

            <h4>Confirm Password</h4>
            <input
              className="input"
              type="password"
              name="passwordConfirmation"
              onChange={this.handleChange}
              value={passwordConfirmation}
            />

            {errors.length > 0 && (
              <div className="errorSection">
                Error:
                {this.displayErrors(errors)}
              </div>
            )}

            <button onClick={this.handleSubmit} className="submit">
              Sign Up
            </button>

            <p className="switch_text">
              Already have an Account ?<Link to="/login">Login Here</Link>
            </p>
          </form>
        </div>
        <Notification
          message={"User Registration Successful."}
          topPosition={top}
        />
      </React.Fragment>
    );
  }
}
export default Registration;
