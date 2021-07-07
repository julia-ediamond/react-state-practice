import React, { Component } from "react";
import Game from "./Game";
import Demo from "./Demo";
import Rando from "./Rando";
import Button from "./Button";
import BrokenClick from "./BrokenClick";
import RandomNumber from "./RandomNumber";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rando maxNum={7} />
        <Button />
        <BrokenClick />
        <RandomNumber />
      </div>
    );
  }
}

export default App;
