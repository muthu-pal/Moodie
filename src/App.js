import React from "react";
import { Component } from "react";
import "./App.css";
import { MyButton } from "./components/Button.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Playlist from './components/Playlist.js';
import SongRows from './components/SongRows.js';

//import  MyDropdown  from "./myDropdown.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Title" style={{align: 'right'}}>Clockwise</h1>
        <MyButton className="ButtonMonthYear"
          onClick={() => {
            console.log("button==clicked");
          }}
          type="button"
          buttonStyle="btn--primary--outline"
          buttonSize="btn--small"
        >
          month
        </MyButton>
        <MyButton className="ButtonMonthYear"
          onClick={() => {
            console.log("button==clicked");
          }}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--small"
        >
          year
        </MyButton>

        <SongRows />
      </div>
    );
  }
}

export default App;
