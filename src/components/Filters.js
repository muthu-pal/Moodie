import React, { useState, useEffect } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Playlist from "./Playlist.js";

let fakeServerData = {
  user: {
    name: "harry",
    topSongs: [
      {
        name: "Adore You",
        songArtist: "harry styles",
        month: "July",
        Mood: "High Energy"
      },
      {
        name: "I feel good",
        songArtist: "laundry day",
        month: "February",
        Mood: "High Energy"
      },
      {
        name: "blueberry faygo",
        songArtist: "lil mosey",
        month: "February",
        Mood: "Danceable"
      },
      {
        name: "blueberry faygo",
        songArtist: "lil mosey",
        month: "January",
        Mood: "Acoustic"
      },
      {
        name: "mean it",
        songArtist: "lauv",
        month: "July",
        Mood: "Poppy"
      },
      {
        name: "mean it",
        songArtist: "lauv",
        month: "July",
        Mood: "Chill"
      },
      {
        name: "mean it",
        songArtist: "lauv",
        month: "July",
        Mood: "Instrumental"
      }
    ]
  }
};

const FiltersDrop = (props) => {
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
      fakeServerData.user.topSongs
        .filter((e) => e.Mood === Mood)
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
      </div>
      <br />
      <br />
      {filteredStuff.map((element) => {
        return (
          <>
            <Playlist
              name={element.name}
              artist={element.songArtist}
              photo={"/images/Harry-Styles.jpg"}
              photoAlt="Harry"
            />
          </>
        );
      })}
    </div>
  );
};

export default FiltersDrop;
