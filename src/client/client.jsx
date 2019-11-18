import React from "react";
import ReactDOM from "react-dom";
import Health from "./Health";

export class App extends React.Component {
  
  render() {
    return (
      <div>
        <Health />
      </div>
    );
  }
}

const main = document.getElementById("main");
ReactDOM.render(<App />, main);
