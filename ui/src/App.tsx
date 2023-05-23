import React, { Component } from "react";
import "./App.css";
import { Leads } from "./leads";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to Hi Pages {"user.firstName"}
        </header>
        <Leads />
      </div>
    );
  }
}

export default App;
