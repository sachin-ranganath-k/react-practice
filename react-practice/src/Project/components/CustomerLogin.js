import React, { useState } from "react";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";

function CustomerLogin() {
  const navigate = useNavigate();

  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const submit = () => {
    if (!(customerEmail === "user@gmail.com" || customerPassword === "user@123")) {
      setErrorMessage(true);
    } else {
      sessionStorage.setItem("userEmail", customerEmail);
      navigate("/userDashboard");
    }
  };

  const emailHandler = (e) => {
    setCustomerEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setCustomerPassword(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="container" style={{ margin: "5%" }}>
        <h2>Customer Login</h2>
        {errorMessage && (
          <div class="alert alert-danger">
            <strong>Invalid Credentials..!</strong>
          </div>
        )}
        <div className="form-group">
          <input
            type="text"
            placeholder="Customer Email"
            className="form-control"
            name="customerEmail"
            value={customerEmail}
            onChange={emailHandler}
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
            onChange={passwordHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submit}>
          Login
        </button>
        <br />
      </div>
    </div>
  );
}

export default CustomerLogin;
