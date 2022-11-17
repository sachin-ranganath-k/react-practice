import React from "react";
import North from "../images/north.gif";
import South from "../images/south.jpg";
import { Card, Icon, Image } from "semantic-ui-react";

const HemisphereChildDisplay = ({ latitude, longitude, error }) => {
  //props from Hemisphere.js

  const hemi =
    latitude > 0 ? (
      <p style={{ color: "green" }}>Northern Hemisphere</p>
    ) : (
      <p style={{ color: "blue" }}>Southern Hemisphere</p>
    );
  const picture = latitude > 0 ? North : South;

  return (
    <div className="ui card" style={{ margin: "10% 0% 0% 35%" }}>
      {error ? (
        <>
          <div class="alert alert-danger">
            <a href="#" class="alert-link">
            { `${error}..! Please check permission`}
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="image">
            <img src={picture} />
          </div>
          <div className="content">
            <a className="header"></a>
            <div className="meta">
              <span className="date">{hemi}</span>
              <p>Longitude: {longitude}</p>
              <p>Latitude: {latitude}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HemisphereChildDisplay;
