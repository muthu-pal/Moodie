import React from "react";
import { Component } from "react";
import Emoji from "react-emoji-render";
import './aboutPage.css'
//<Emoji text=":emoji:" />

class About extends Component {
    render() {
      return (
        <div style={{ color: "white", textAlign: "center", bottom: "5px", width: "100%" }} className="about">
          <h1><Emoji text=":sparkles:" /> all about Moodie: <Emoji text=":sparkles:" /></h1>
          
          <p style={{fontSize: "20px",width: "50%", textAlign: "center", marginLeft:"auto", marginRight:"auto"}}>Moodie was created using React.js and the Spotify API. We pull your top 50 tracks
              from your listening history and analyze the various audio features that Spotify provides each track.
              Each track has attributes like a danceability score, acousticness level, and tempo. Using these values,
              we try to categorize your music! 
          </p>
          <br />
          <p style={{fontSize: "14px",width: "40%", textAlign: "center", marginLeft:"auto", marginRight:"auto"}}> 
                <Emoji text=":watermelon:" /> For example, "Watermelon Sugar" by Harry Styles has a danceability of 0.548, an energy of 0.816,
                and valence of 0.557. All of these values are on the "higher" side, so high danceability, energy, and 
                valence all work together to categorize the song as "Happy". <Emoji text=":watermelon:" /> </p>
          <p style={{fontSize: "18px"}}> Set the mood as "All Songs" to view all 50 of your top tracks! <Emoji text=":nerd_face:" /></p>

          <br/>
          <p style={{fontSize: "12px"}} >made with <Emoji text=":heart:" /> by 
                <a style={{color:"#92D3FF"}} href="https://www.linkedin.com/in/muthu-p/" target = "_blank" rel = "noopener noreferrer"> Muthu </a>
                and 
                <a style={{color:"#92D3FF"}} href="https://www.linkedin.com/in/raveena-rao/" target = "_blank" rel = "noopener noreferrer"> Raveena </a>
          </p>
        </div>
      );
    }
  }
  
  export default About;