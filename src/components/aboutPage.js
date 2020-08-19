import React from "react";
import { Component } from "react";
import Emoji from "react-emoji-render";
//<Emoji text=":emoji:" />

class About extends Component {
    render() {
      return (
        <div style={{ color: "white", textAlign: "center", bottom: "5px", width: "100%" }} className="about">
          <h1>all about Moodie:</h1>
          <p>hello! Moodie was created using React.js and the Spotify API. ADD STUFF ABOUT HOW IT WORKS</p>
          <br/>
          <p>ADD STUFF ABT US</p>
        </div>
      );
    }
  }
  
  export default About;