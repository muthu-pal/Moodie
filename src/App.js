import React, { useState } from "react";
import "./App.css";
import FiltersDrop from "./components/Filters.js";
import About from "./components/aboutPage.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  
  return (
    <div className="App">
      <Container>
        <div style={{height: "70px"}}>
          <h1 className="Title">Moodie</h1>
        </div>
      </Container>
      <Container>
        <br/>
          <FiltersDrop />
        <br />
      </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <About />
      
    </div>
  );
}
