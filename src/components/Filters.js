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


const FiltersDrop = (props) => {
  const [loggedInQuery, setLoggedInQuery] = useState("");
  
  const [serverData, setServerData] = useState(
    {
      user: "",
    });

  //states for ids
  //track ids for user's top songs
  const [serverDataTopSongsLT, setServerDataTopSongsLT] = useState([]);
  const [serverDataTopSongsMT, setServerDataTopSongsMT] = useState([]);
  const [serverDataTopSongsST, setServerDataTopSongsST] = useState([]);


  //track info like id, acousticness, tempo, etc
  const [tracksInfoLT, setTracksInfoLT] = useState([]);
  const [tracksInfoMT, setTracksInfoMT] = useState([]);
  const [tracksInfoST, setTracksInfoST] = useState([]);


  const [filteredIDArr, setFilteredIDArr] = useState([]);
  const [topSongsArr, setTopSongsArr] = useState([]);


  //LOG IN 

  function logIn(){
    const parsed = queryString.parse(window.location.search);
    let access_token = parsed.access_token;
    //console.log(parsed);
    setLoggedInQuery(access_token);
    if (!access_token){
      console.log("err")
      return;
    }
  }

//GET TRACK IDS IN ARRAY
  useEffect(() => {
    fetch('https://api.spotify.com/v1/me', 
    {headers: {'Authorization': 'Bearer ' + loggedInQuery}
    }).then((response) => 
      response.json()
     ).then((data) => (setServerData({...serverData, user: data.display_name})))
     .catch(error => console.log(error))
    

    fetch('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', 
    {headers: {'Authorization': 'Bearer ' + loggedInQuery}
    }).then((response) => response.json())
      .then((data) => setServerDataTopSongsLT(data.items.map(item => item.id)))
      .catch(error => console.log(error))

      fetch('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term', 
    {headers: {'Authorization': 'Bearer ' + loggedInQuery}
    }).then((response) => response.json())
      .then((data) => setServerDataTopSongsMT(data.items.map(item => item.id)))
      .catch(error => console.log(error))

      fetch('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', 
    {headers: {'Authorization': 'Bearer ' + loggedInQuery}
    }).then((response) => response.json())
      .then((data) => setServerDataTopSongsST(data.items.map(item => item.id)))
      .catch(error => console.log(error)) 
    
  }, [loggedInQuery]);





//LONGTERM DATA: track info
useEffect(() => {
  
  let arrLink = serverDataTopSongsLT.reduce((total, init) => (total + ","+ init) , "");
  arrLink = arrLink.slice(1,);
  console.log(arrLink)
  fetch(`https://api.spotify.com/v1/audio-features?ids=${arrLink}`, 
        {headers: {'Authorization': 'Bearer ' + loggedInQuery}
        }).then((response) => response.json())
         .then((data) => 
         //console.log(data.audio_features))
         setTracksInfoLT( ...tracksInfoLT,
         (data.audio_features.map(item => (
                     {
                    id: item.id,
                    acousticness: item.acousticness,
                    danceability: item.danceability,
                    energy: item.energy,
                    instrumentalness: item.instrumentalness,
                    liveness: item.liveness,
                    loudness: item.loudness,
                    speechiness: item.speechiness,
                    valence: item.valence,
                    tempo: item.tempo
                     })
                     ))
                    ))
        
                    .catch(error => console.log(error))  
  }, [serverDataTopSongsLT]);    
  console.log(tracksInfoLT); 

//MediumTERM DATA: track info
useEffect(() => {
  let arrLink = serverDataTopSongsMT.reduce((total, init) => (total + ","+ init) , "");
  arrLink = arrLink.slice(1,);
  console.log(arrLink)
  fetch(`https://api.spotify.com/v1/audio-features?ids=${arrLink}`, 
        {headers: {'Authorization': 'Bearer ' + loggedInQuery}
        }).then((response) => response.json())
         .then((data) => 
         //console.log(data.audio_features))
         setTracksInfoMT( ...tracksInfoLT,
         (data.audio_features.map(item => (
                     {
                    id: item.id,
                    acousticness: item.acousticness,
                    danceability: item.danceability,
                    energy: item.energy,
                    instrumentalness: item.instrumentalness,
                    liveness: item.liveness,
                    loudness: item.loudness,
                    speechiness: item.speechiness,
                    valence: item.valence,
                    tempo: item.tempo
                     })
                     ))
                    ))
        
                    .catch(error => console.log(error))  
  }, [serverDataTopSongsMT]);    
  console.log(tracksInfoMT); 


//ShortTERM DATA: track info
useEffect(() => {
  
  let arrLink = serverDataTopSongsST.reduce((total, init) => (total + ","+ init) , "");
  arrLink = arrLink.slice(1,);
  console.log(arrLink)
  fetch(`https://api.spotify.com/v1/audio-features?ids=${arrLink}`, 
        {headers: {'Authorization': 'Bearer ' + loggedInQuery}
        }).then((response) => response.json())
         .then((data) => 
         //console.log(data.audio_features))
         setTracksInfoST( ...tracksInfoLT,
         (data.audio_features.map(item => (
                     {
                    id: item.id,
                    acousticness: item.acousticness,
                    danceability: item.danceability,
                    energy: item.energy,
                    instrumentalness: item.instrumentalness,
                    liveness: item.liveness,
                    loudness: item.loudness,
                    speechiness: item.speechiness,
                    valence: item.valence,
                    tempo: item.tempo
                     })
                     ))
                    ))
        
                    .catch(error => console.log(error))  
  }, [serverDataTopSongsST]);    
  console.log(tracksInfoST); 
  









useEffect(() => {
  //take in an array of filtered IDs and return the image, track name, artist
    let arrLink = filteredIDArr.reduce((total, init) => (total + ","+ init) , "");
    arrLink = arrLink.slice(1,);
    fetch(`https://api.spotify.com/v1/tracks?ids=${arrLink}`, 
        {headers: {'Authorization': 'Bearer ' + loggedInQuery}
        }).then((response) => response.json())
         .then((data) => 
        //console.log(data.tracks))
         setTopSongsArr(
         (data.tracks.map(item => (
                     {
                    name: item.name,
                    artist: item.album.artists[0].name,
                    photo: item.album.images[2].url,
                     })
                     ))
                    ))
        
                    .catch(error => console.log(error))
    
    
  
}, [filteredIDArr]);    
//console.log(topSongsArr); 


    
  


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

  // useEffect(() => {
  //   setFilteredStuff(
  //     topSongsArr
  //       //.filter((e) => e.Mood === Mood)
  //       .slice(0, viewNum)
  //   );
  // }, [Mood, viewNum]);

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
              {/* <Button onClick={filterData(serverDataTracksLT)}>submit</Button> */}
            
              {filteredStuff.map((element) => {
                return (
                  <>
                    <Playlist
                      // name={serverData}
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
      
      

      : 
      (<div><h1>please sign in <Button onClick={logIn}>here</Button></h1></div>)}
      

    </div>
  );
};

export default FiltersDrop;
