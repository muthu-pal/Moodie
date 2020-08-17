import React, { useState, useEffect } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Playlist from "./Playlist.js";
import queryString from "query-string";
import { format } from "util";


// let fakeServerData = {
//   user: {
//     name: "harry",
//     topSongs: [
//       {
//         name: "Adore You",
//         songArtist: "harry styles",
//         month: "July",
//         Mood: "High Energy"
//       }
//     ]
//   }
// };

const FiltersDrop = (props) => {
  const [loggedInQuery, setLoggedInQuery] = useState("");
  
  let topSongsArr = [];
  const [serverData, setServerData] = useState(
     {
       user: ""
     });
     const [serverDataTopSongsLT, setServerDataTopSongsLT] = useState([]);
     const [serverDataTopSongsMT, setServerDataTopSongsMT] = useState([]);
     const [serverDataTopSongsST, setServerDataTopSongsST] = useState([]);

     const [serverDataTracksLT, setServerDataTracksLT] = useState([]);
     const [serverDataTracksMT, setServerDataTracksMT] = useState([]);
     const [serverDataTracksST, setServerDataTracksST] = useState([]);

    //  const [tracksInfoLT, setTracksInfoLT] = useState({
    //    id: "",
    //    acousticness: 0.0,
    //    danceability: 0.0,
    //    energy: 0.0,
    //    instrumentalness: 0.0,
    //    liveness: 0.0,
    //    loudness: 0.0,
    //    speechiness: 0.0,
    //    valence: 0.0,
    //    tempo: 0.0



    //  });

  

  function logIn(){
    const parsed = queryString.parse(window.location.search);
    let access_token = parsed.access_token;
    //console.log(parsed);
    setLoggedInQuery(access_token);
    if (!access_token){
      console.log("err")
      return;
    }
    fetch('https://api.spotify.com/v1/me', 
    {headers: {'Authorization': 'Bearer ' + access_token}
    }).then((response) => 
      response.json()
     ).then((data) => (setServerData({...serverData, user: data.display_name})))
    

    fetch('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', 
    {headers: {'Authorization': 'Bearer ' + access_token}
    }).then((response) => response.json())
      .then((data) => setServerDataTopSongsLT(data.items.map(item => item.id)))

      fetch('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term', 
    {headers: {'Authorization': 'Bearer ' + access_token}
    }).then((response) => response.json())
      .then((data) => setServerDataTopSongsMT(data.items.map(item => item.id)))

      fetch('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', 
    {headers: {'Authorization': 'Bearer ' + access_token}
    }).then((response) => response.json())
      .then((data) => setServerDataTopSongsST(data.items.map(item => item.id)))

      // fetch(`https://api.spotify.com/v1/audio-features?ids=${serverDataTracksLT}`, 
      //   {headers: {'Authorization': 'Bearer ' + access_token}
      //   }).then((response) => response.json())
      //   .then((data) => (data.audio_features.map(item => setTracksInfoLT({
      //     ...tracksInfoLT,
      //     id: item.id,
      //     acousticness: item.acousticness,
      //     danceability: item.danceability,
      //     energy: item.energy,
      //     instrumentalness: item.instrumentalness,
      //     liveness: item.liveness,
      //     loudness: item.loudness,
      //     speechiness: item.speechiness,
      //     valence: item.valence,
      //     tempo: item.tempo
      //   }))))
      
      
        



     


    
  }

  console.log(loggedInQuery)
  console.log(serverData)
  console.log(serverDataTopSongsST)
  console.log(serverDataTopSongsMT)
  // console.log(serverDataTracksLT)
  

  


  const [dropdownOpenMood, setOpenMood] = useState(false);
  const [Mood, setMood] = useState("");

  const [dropdownOpenView, setOpenView] = useState(false);
  const [viewNum, setView] = useState(1);

  const [filteredStuff, setFilteredStuff] = useState([]);

  const toggleMood = () => {
    setOpenMood(!dropdownOpenMood);
  };
  const toggleV = () => {
    setOpenView(!dropdownOpenView);
  };

  useEffect(() => {
    setFilteredStuff(
      topSongsArr
        //.filter((e) => e.Mood === Mood)
        .slice(0, viewNum)
    );
  }, [Mood, viewNum]);

  function clickedHighEnergy() {
    setMood("High Energy");
  }
  function clickedDanceable() {
    setMood("Danceable");
  }
  function clickedInstrumental() {
    setMood("Instrumental");
  }
  function clickedAcoustic() {
    setMood("Acoustic");
  }
  function clickedLive() {
    setMood("Live");
  }
  function clickedSpeechy() {
    setMood("Speechy");
  }
  function clickedChill() {
    setMood("Chill");
  }
  function clickedHappy() {
    setMood("Happy");
  }
  function clickedSad() {
    setMood("Sad");
  }
  function clickedPoppy() {
    setMood("Poppy");
  }
  function clickedIndie() {
    setMood("Indie");
  }
  function clickedElectronic() {
    setMood("Electronic");
  }

  function clicked10() {
    setView(1);
  }
  function clicked25() {
    setView(2);
  }
  function clicked50() {
    setView(3);
  }

  return (
    <div>
      {(loggedInQuery !== "") ?
      (serverData !== "") && 
        <div>
              <div>
                <ButtonDropdown
                  isOpen={dropdownOpenMood}
                  toggle={toggleMood}
                  className="Mood--Btn"
                >
                  <DropdownToggle
                    caret
                    style={{
                      backgroundColor: "#1DB954",
                      borderColor: "white",
                      color: "white",
                      borderRadius: "20px"
                    }}
                  >
                    Mood: {Mood}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={clickedHighEnergy}>High Energy</DropdownItem>
                    <DropdownItem onClick={clickedDanceable}>Danceable</DropdownItem>
                    <DropdownItem onClick={clickedInstrumental}>
                      Instrumental
                    </DropdownItem>
                    <DropdownItem onClick={clickedAcoustic}>Acoustic</DropdownItem>
                    <DropdownItem onClick={clickedLive}>Live</DropdownItem>
                    <DropdownItem onClick={clickedSpeechy}>Speechy</DropdownItem>
                    <DropdownItem onClick={clickedChill}>Chill</DropdownItem>
                    <DropdownItem onClick={clickedHappy}>Happy</DropdownItem>
                    <DropdownItem onClick={clickedSad}>Sad</DropdownItem>
                    <DropdownItem onClick={clickedPoppy}>Poppy</DropdownItem>
                    <DropdownItem onClick={clickedIndie}>Indie</DropdownItem>
                    <DropdownItem onClick={clickedElectronic}>Electronic</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>

                <ButtonDropdown
                  isOpen={dropdownOpenView}
                  toggle={toggleV}
                  className="view--Btn"
                >
                  <DropdownToggle
                    caret
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "white",
                      color: "white",
                      borderRadius: "20px"
                    }}
                  >
                    {viewNum}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={clicked10}>1</DropdownItem>
                    <DropdownItem onClick={clicked25}>2</DropdownItem>
                    <DropdownItem onClick={clicked50}>3</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
            
              <br />
              <br />
            
              {filteredStuff.map((element) => {
                return (
                  <>
                    <Playlist
                      name={serverData}
                      //   element.name}
                      // artist={element.artist}
                      // photo={element.albumImg}
                      // photoAlt="Album Cover"
                    />
                  </>
                );
              })}
        </div>
      
      </div>
      // : <h1>could not connect</h1>
      

      : 
      (<div><h1>please sign in <Button onClick={logIn}>here</Button></h1></div>)}
      

    </div>
  );
};

export default FiltersDrop;
