import React from "react";
import North from "../images/north.jpg";
import South from "../images/south.jpg";

const HemisphereChildDisplay = ({ latitude, longitude, error }) => {
  //props from Hemisphere.js

  const hemi = latitude > 0 ? "Northern Hemisphere" : "Southern Hemisphere";
  const picture = latitude > 0 ? North : South;

  return (
    <div>
      {error ? (
       <p style={{color:"red"}}>{error}</p>
      ) : (
        <div>
          <img src={picture} height="100px" />
          <p>{hemi}</p>
        </div>
      )}
    </div>
  );
};

export default HemisphereChildDisplay;
