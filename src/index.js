import React from "react";
import ReactDOM from "react-dom";

import Form from "./Form.jsx";
import HooksForm from "./HooksForm.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>A Simple Form in React</h1>
      <HooksForm />
      <Form />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
