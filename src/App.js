import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardForm from "./components/CardForm";
import "./App.css";

function App() {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center bg-dark text-light"
      style={{ minHeight: "100vh", flexDirection: "column" }}
    >
      <div className="container col-lg-6 text-center">
        <h1 className="mb-4">Gift Card Generator</h1>
        <CardForm />
      </div>
    </div>
  );
}

export default App;
