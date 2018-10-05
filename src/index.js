import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

import "./styles.css";

const App = props => (
  <div className="App">
    <h1>CodeSandbox Counter</h1>
    <h2>{props.count}</h2>
  </div>
);

let count = 0;

setInterval(function() {
  render(<App count={count++} />, document.getElementById("root"));
}, 1000);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
