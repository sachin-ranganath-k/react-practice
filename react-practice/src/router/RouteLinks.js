import CardsParentHomePage from "../components/CardsParentHomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Courses from "../components/Courses";
import ContactUs from "../components/ContactUs";
import NavBar from "../Project/components/NavBar";
import Main from "../Hemisphere/Main";
import Hemisphere from "../Hemisphere/Hemisphere";
import Register from "../Project/components/Register";
import Login from "../Project/components/Login";
import LoginFunc from "../Project/components/LoginFunc";
import Dashboard from "../Project/components/Dashboard";
import UserDashboard from "../Project/components/UserDashboard";
import CustomerLogin from "../Project/components/CustomerLogin";
import NavBarCustomer from "../Project/components/NavBarCustomer";
import Logout from "../Project/components/Logout";

const RouteLinks = () => {
  return (
    <div>
      <Router>
        {/* {sessionStorage.getItem("userEmail") !== "" ? (
          <NavBarCustomer />
        ) : (
          <NavBar />
        )} */}
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route path="/login" element={<LoginFunc />} />
          <Route path="/customerLogin" element={<CustomerLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route exact path="/" element={<Hemisphere />} /> */}
          {/* <Route exact path="/" element={<CardsParentHomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/ContactUs" element={<ContactUs/>} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
