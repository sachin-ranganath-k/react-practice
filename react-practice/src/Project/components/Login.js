import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      customerEmail: "",
      customerPassword: "",
      errorMessage: false,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //   addressHandler = (e) => {
  //     this.setState({ address: e.target.value });
  //   };

  //   loanAmountHandler = (e) => {
  //     this.setState({ loanAmount: e.target.value });
  //   };

  //   changeTenureHandler = (e) => {
  //     this.setState({ tenure: e.target.value });
  //   };

  submitHandler = (e) => {
    e.preventDefault();

    if (
      !(
        this.state.customerEmail === "admin" ||
        this.state.customerPassword === "admin"
      )
    ) {
      this.setState({ errorMessage: true });
      return false;
    } else {
      <Navigate to="/login" replace={true} />;
    }
  };
  render() {
    const { customerEmail, customerPassword } = this.state;
    return (
      <div className="container" style={{ margin: "5%" }}>
        <h2>Customer Login</h2>
        <form onSubmit={this.submitHandler}>
          <p style={{ color: "red" }}>{this.state.errorMessage}</p>
          <div className="form-group">
            <input
              type="text"
              placeholder="Customer Email"
              className="form-control"
              name="customerEmail"
              value={customerEmail}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="customerPassword"
              value={customerPassword}
              min="5"
              max="20"
              onChange={this.changeHandler}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.submitHandler}
          >
            Register
          </button>
          <br />
          {this.state.errorMessage && (
            <p style={{ color: "red" }}>Invalid Credentials..!</p>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
