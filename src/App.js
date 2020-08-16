import React, { useState } from "react";
import "./App.css";
import FiltersDrop from "./components/Filters.js";
import queryString from "query-string";
import {
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  // const [loggedInQuery, setLoggedInQuery] = useState("");

  // function logIn(){
  //   const parsed = queryString.parse(window.location.search);
  //   console.log(parsed);
  //   setLoggedInQuery(parsed.access_token);
  //   fetch('https://api.spotify.com/v1/me', 
  //   {headers: {'Authorization': 'Bearer ' + parsed.access_token}
  //   }).then((response) => 
  //     response.json()
  //   ).then((data) => console.log(data))
  // }

  // console.log(loggedInQuery)
  


  return (
    <div className="App">
      <h1 className="Title">Clockwise</h1>
      {/* {(loggedInQuery !== "") ? <FiltersDrop /> : (<h1>please sign in <Button onClick={logIn}>here</Button></h1>)} */}
      <FiltersDrop />
      
    </div>
  );
}
