import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    //initialize state, state in the begining
    this.state = {
      score: 0,
      gameOver: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Your score is: {this.state.score}</h1>
      </div>
    );
  }
}

export default Game;
