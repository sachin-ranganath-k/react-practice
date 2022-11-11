import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("I am in the CONSTRUCTOR of the Counter.js.");
  }

  counter = () => {
    this.setState({ count: this.state.count + 1 });
    /* // Second way - using `setState` callback
        (state) => {
          return { 
            count: state.count + 1 
          };
        }
        */
  };

  componentDidMount() {
    this.timer = setInterval(this.counter, 1000);
    console.log("Component DID MOUNT.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Counter UPDATED from: ", prevState.count);
  }

  componentWillUnmount() {
    console.log("======== Component COUNTER is UNMOUNTED! ========");
    clearInterval(this.timer); // !!!
  }

  render() {
    console.log("I am in the RENDER of the Counter.");
    return <h1> {this.state.count}</h1>;
  }
}

export default ClassComp;
