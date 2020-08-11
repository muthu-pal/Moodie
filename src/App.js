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

let fakeServerData = {
  user: {
    name: "harry",
    topSongs: [
      {
        songName: "Adore You",
        songArtist: "harry styles"
      },
      {
        songName: "I feel good",
        songArtist: "laundry day"
      },
      {
        songName: "blueberry faygo",
        songArtist: "lil mosey"
      }
    ]
  }
}


class App extends Component {
  constructor(){
    super();
    this.state={serverData: {}}
  }
  
  componentDidMount(){
    setTimeout( ()=> {
    this.setState({
      serverData: fakeServerData
    })}, 2000
    )
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title" style={{align: 'right'}}>Clockwise</h1>
        {this.state.serverData.user ?
        <div>
          <h3>welcome {this.state.serverData.user.name}</h3>
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
        </div> : <h1 style={{color: '#1DB954', textAlign: "center"}}>fetching your music...</h1>}

      </div>
    );
  }
}

export default App;
