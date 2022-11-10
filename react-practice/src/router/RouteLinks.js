import CardsParentHomePage from "../components/CardsParentHomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Courses from "../components/Courses";
import ContactUs from "../components/ContactUs"
import NavBar from "../components/NavBar";

const RouteLinks = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<CardsParentHomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
