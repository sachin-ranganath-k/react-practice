import React, { useEffect } from "react";
import NavBarCustomer from "./NavBarCustomer";

const UserDashboard = () => {
  const userEmail = sessionStorage.getItem("userEmail");

  return (
    <div>
      <NavBarCustomer />
      <div class="alert alert-success" style={{ textAlign: "center" }}>
        <strong>{`Welcome ${userEmail}`}</strong>
      </div>
      <div className="container">
        <button type="submit" className="btn btn-primary">
          Apply for Loan
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-primary">
          Withdraw
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-primary">
          Loan Prepayment
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-primary">
          View Repayment Schedule
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-primary">
          Export Repayment Schedule in CSV
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
