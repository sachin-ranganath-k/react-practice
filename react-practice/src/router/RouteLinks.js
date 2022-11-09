import CardsParentHomePage from "../components/CardsParentHomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RouteLinks = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<CardsParentHomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
