import React, { Component } from "react";
import NavBar from "./NavBar";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerName: "",
      address: "",
      loanAmount: "",
      tenure: "",
      errorMessage: false,

      updatedCustomerName: "",
      updatedAddress: "",
      updatedLoanAmount: "",
      updatedTenure: "",
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
        this.state.customerName ||
        this.state.address ||
        this.state.loanAmount ||
        this.state.tenure
      )
    ) {
      this.setState({ errorMessage: true });
    } else {
      this.setState({
        updatedCustomerName: this.state.customerName,
        updatedAddress: this.state.address,
        updatedLoanAmount: this.state.loanAmount,
        updatedTenure: this.state.tenure,
      });
    }
  };
  render() {
    const { customerName, address, loanAmount, tenure } = this.state;
    return (
      <>
        <NavBar />
        <div className="container" style={{ margin: "5%" }}>
          <h2>Customer Registration</h2>
          <form onSubmit={this.submitHandler}>
            <p style={{ color: "red" }}>{this.state.errorMessage}</p>
            <div className="form-group">
              <input
                type="text"
                placeholder="Customer Name"
                className="form-control"
                name="customerName"
                value={customerName}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                id="comment"
                placeholder="Address"
                name="address"
                value={address}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Loan Amount"
                className="form-control"
                name="loanAmount"
                value={loanAmount}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Tenure in Months"
                className="form-control"
                name="tenure"
                value={tenure}
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
            {this.state.errorMessage ? (
              <p style={{ color: "red" }}>Please fill all fields</p>
            ) : (
              <>
                <h2>Details</h2>
                <div>
                  {this.state.updatedCustomerName}
                  <br />
                  {this.state.updatedAddress}
                  <br />
                  {this.state.updatedLoanAmount}
                  <br />
                  {this.state.updatedTenure}
                </div>
              </>
            )}
          </form>
        </div>
      </>
    );
  }
}

export default Register;
