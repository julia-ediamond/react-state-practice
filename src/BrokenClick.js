import React, { Component } from "react";

class BrokenClick extends Component {
  //constructor(props) {
  // super(props);
  //defining state
  state = { clicked: false };
  //this.state = { clicked: false };
  //this.handleClick = this.handleClick.bind(this);
  handleClick = (e) => {
    this.setState({ clicked: true }); //it will bind automatically
  };

  //handleClick(e) {
  //this.setState({ clicked: true });
  //}
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked" : "Not clicked"} </h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default BrokenClick;
