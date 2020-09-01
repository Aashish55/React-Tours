import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Notification from "../Notification/Notification";
import { setAuthorization } from "../../utils/setAuthorization";
import { connect } from "react-redux";
import { setUser } from "../../action/index";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    top: -100,
  };

  loginHandler = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      console.log("ready to login");
      this.setState({ errors: [] });

      const loginData = {
        loginInfo: this.state.email,
        password: this.state.password,
      };
      axios
        .post(
          "https://explore-it-main.herokuapp.com/api/v1/users/login",
          loginData
        )
        .then((response) => {
          console.log(response.data);
          this.showNotification();
          const token = response.data.token;
          localStorage.setItem("jwtToken", token);
          setAuthorization(token);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
    } else {
      return true;
    }
  };

  isFormEmpty = ({ email, password }) => {
    return !email.length || !password.length;
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  displayErrors = (errors) =>
    errors.map((error, i) => (
      <p key={i} className="errorMessage">
        {error.message}
      </p>
    ));

  render() {
    const { email, password, errors, top } = this.state;

    return (
      <React.Fragment>
        <div className="section">
          <div className="leftPart">
            <div className="textArea">
              <h1>ExploreIT</h1>
              <p className="secondary_text">Some Text Here...</p>
            </div>
            <h2 className="arrowRight">&rsaquo;</h2>
          </div>
          <form className="form" onSubmit={this.loginHandler}>
            <h3>Login</h3>

            <h4>Email</h4>
            <input
              className="input"
              name="email"
              onChange={this.handleChange}
              value={email}
              type="email"
            />

            <h4>Password</h4>
            <input
              className="input"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
            />

            {errors.length > 0 && (
              <div className="errorSection">
                Error:
                {this.displayErrors(errors)}
              </div>
            )}

            <button className="submit" onClick={this.loginHandler}>
              Login
            </button>

            <p className="switch_text">
              Don't have an Account ?{" "}
              <Link to="/registration">Register Here.</Link>{" "}
            </p>
          </form>
        </div>
        <Notification message={"User Login Successful."} topPosition={top} />
      </React.Fragment>
    );
  }
}

export default connect(null, { setUser })(Login);
