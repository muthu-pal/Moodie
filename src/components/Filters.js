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
        year: "2020"
      },
      {
        name: "I feel good",
        songArtist: "laundry day",
        month: "February",
        year: "2018"
      },
      {
        name: "blueberry faygo",
        songArtist: "lil mosey",
        month: "February",
        year: "2019"
      },
      {
        name: "blueberry faygo",
        songArtist: "lil mosey",
        month: "January",
        year: "2019"
      },
      {
        name: "mean it",
        songArtist: "lauv",
        month: "July",
        year: "2020"
      },
      {
        name: "mean it",
        songArtist: "lauv",
        month: "July",
        year: "2020"
      },
      {
        name: "mean it",
        songArtist: "lauv",
        month: "July",
        year: "2020"
      }
    ],
    topArtists: [
      { name: "Harry Styles", month: "July", year: "2020" },
      { name: "Khalid" },
      { name: "Taylor Swift" },
      { name: "Joji" },
      { name: "LANY" }
    ]
  }
};

const FiltersDrop = (props) => {
  const [dropdownOpenSongArtist, setOpenSongArtist] = useState(false);
  const [songArtist, setSongArtist] = useState("Song");

  const [dropdownOpenMonth, setOpenMonth] = useState(false);
  const [month, setMonth] = useState("January");

  const [dropdownOpenYear, setOpenYear] = useState(false);
  const [year, setYear] = useState("2020");

  const [dropdownOpenView, setOpenView] = useState(false);
  const [viewNum, setView] = useState(1);
  const [filteredStuff, setFilteredStuff] = useState([]);

  const toggleSA = () => {
    setOpenSongArtist(!dropdownOpenSongArtist);
  };
  const toggleM = () => {
    setOpenMonth(!dropdownOpenMonth);
  };
  const toggleY = () => {
    setOpenYear(!dropdownOpenYear);
  };
  const toggleV = () => {
    setOpenView(!dropdownOpenView);
  };

  function clickedSong() {
    setSongArtist("Song");
    //setFiltArray(fakeServerData.user.topSongs.map((user) => user.name));
  }

  function clickedArtist() {
    setSongArtist("Artist");
    //setFiltArray(fakeServerData.user.topArtists.map((user) => user.name));
  }

  useEffect(() => {
    setFilteredStuff(
      songArtist === "Song"
        ? fakeServerData.user.topSongs
            .filter((e) => e.month === month)
            .filter((e) => e.year === year)
            .slice(0, viewNum)
        : fakeServerData.user.topArtists
            .filter((e) => e.month === month)
            .filter((e) => e.year === year)
            .slice(0, viewNum)
    );
  }, [songArtist, month, year, viewNum]);

  //console.log(filteredStuff);

  function clickedJan() {
    setMonth("January");
  }
  function clickedFeb() {
    setMonth("February");
  }
  function clickedMarch() {
    setMonth("March");
  }
  function clickedApril() {
    setMonth("April");
  }
  function clickedMay() {
    setMonth("May");
  }
  function clickedJune() {
    setMonth("June");
  }
  function clickedJuly() {
    setMonth("July");
  }
  function clickedAug() {
    setMonth("August");
  }
  function clickedSept() {
    setMonth("September");
  }
  function clickedOct() {
    setMonth("October");
  }
  function clickedNov() {
    setMonth("November");
  }
  function clickedDec() {
    setMonth("Dec");
  }
  function clicked2020() {
    setYear("2020");
  }
  function clicked2019() {
    setYear("2019");
  }
  function clicked2018() {
    setYear("2018");
  }
  function clicked2017() {
    setYear("2017");
  }
  function clicked2016() {
    setYear("2016");
  }
  function clicked2015() {
    setYear("2015");
  }
  function clicked2014() {
    setYear("2014");
  }
  function clicked2013() {
    setYear("2013");
  }
  function clicked2012() {
    setYear("2012");
  }
  function clicked2011() {
    setYear("2011");
  }
  function clicked2010() {
    setYear("2010");
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
          isOpen={dropdownOpenSongArtist}
          toggle={toggleSA}
          className="songArtist--Btn"
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
            {songArtist}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={clickedSong}>Song</DropdownItem>
            <DropdownItem onClick={clickedArtist}>Artist</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <ButtonDropdown
          isOpen={dropdownOpenMonth}
          toggle={toggleM}
          className="month--Btn"
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
            {month}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={clickedJan}>January</DropdownItem>
            <DropdownItem onClick={clickedFeb}>February</DropdownItem>
            <DropdownItem onClick={clickedMarch}>March</DropdownItem>
            <DropdownItem onClick={clickedApril}>April</DropdownItem>
            <DropdownItem onClick={clickedMay}>May</DropdownItem>
            <DropdownItem onClick={clickedJune}>June</DropdownItem>
            <DropdownItem onClick={clickedJuly}>July</DropdownItem>
            <DropdownItem onClick={clickedAug}>August</DropdownItem>
            <DropdownItem onClick={clickedSept}>September</DropdownItem>
            <DropdownItem onClick={clickedOct}>October</DropdownItem>
            <DropdownItem onClick={clickedNov}>November</DropdownItem>
            <DropdownItem onClick={clickedDec}>December</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <ButtonDropdown
          isOpen={dropdownOpenYear}
          toggle={toggleY}
          className="Year--Btn"
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
            {year}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={clicked2020}>2020</DropdownItem>
            <DropdownItem onClick={clicked2019}>2019</DropdownItem>
            <DropdownItem onClick={clicked2018}>2018</DropdownItem>
            <DropdownItem onClick={clicked2017}>2017</DropdownItem>
            <DropdownItem onClick={clicked2016}>2016</DropdownItem>
            <DropdownItem onClick={clicked2015}>2015</DropdownItem>
            <DropdownItem onClick={clicked2014}>2014</DropdownItem>
            <DropdownItem onClick={clicked2013}>2013</DropdownItem>
            <DropdownItem onClick={clicked2012}>2012</DropdownItem>
            <DropdownItem onClick={clicked2011}>2011</DropdownItem>
            <DropdownItem onClick={clicked2010}>2010</DropdownItem>
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
