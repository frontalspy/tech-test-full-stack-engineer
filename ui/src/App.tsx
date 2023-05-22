import React, { Component } from "react";
import "./App.css";
import { Leads } from "./leads";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Leads />
        </header>
      </div>
    );
  }
}

export default App;
