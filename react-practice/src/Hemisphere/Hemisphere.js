// import React, { useState } from "react";
import React, { Component } from "react";
import HemisphereChildDisplay from "./HemisphereChildDisplay";

// function Demo() {
//   const [longitude, setLongitude] = useState("");
//   const [latitude, setLatitude] = useState("");
//   const [error, setError] = useState("");

//   navigator.geolocation.getCurrentPosition(
//     (positions) => {
//       setLongitude(positions.coords.longitude);
//       setLatitude(positions.coords.latitude);
//     },
//     (errors) => setError(errors.message)
//   );

//   return (
//     <div>
//       {!error ? (
//         <div>
//           <p>Longitude: {longitude} </p> <p>Latitude: {latitude}</p>
//         </div>
//       ) : (
//         error
//       )}
//     </div>
//   );
// }

class Hemisphere extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  //    this.state = { latitude: 0, longitude: 0, error: "" };
  //  }
  state = { latitude: 0, longitude: 0, error: "" };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (positions) => {
        this.setState({
          latitude: positions.coords.latitude,
          longitude: positions.coords.longitude,
        });
      },
      (errors) => this.setState({ error: errors.message })
    );
  }

  render() {
    // <div>
    //   {!this.state.error ? (
    //     <div>
    //       <p>Longitude: {this.state.longitude} </p>
    //       <p>Latitude: {this.state.latitude}</p>
    //     </div>
    //   ) : (
    //     this.state.error
    //   )}
    // </div>
    return (
      <div>
        <HemisphereChildDisplay
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Hemisphere;
