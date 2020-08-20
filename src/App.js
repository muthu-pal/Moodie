import React, { useState } from "react";
import "./App.css";
import FiltersDrop from "./components/Filters.js";
import About from "./components/aboutPage.js";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Emoji from "react-emoji-render";

export default function App() {
  
  return (
    <div className="App">
      <Container>
        <div style={{height: "70px"}}>
          <h1 className="Title">Moodie<Emoji text=":sparkles:" /></h1>
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
        <About className = "about"/>
      
    </div>
  );
}
