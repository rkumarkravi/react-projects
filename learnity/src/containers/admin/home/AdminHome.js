import React, { useState, useEffect } from "react";

import "./AdminHome.css";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import constants from '../../../config/config';
function AdminHome() {
  // const [currentLearning, setCurrentLearning] = useState([]);
  // const [programmingLangs, setProgrammingLangs] = useState([]);
  let urlCurrentLearning = "current-learning";
  // let urlProgrammingLangs = constants.url.base+"/programming-langs";


  // const fetchCurrentLearing=()=>{
  //   fetch(urlCurrentLearning)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //       data.length = 4;
  //       setCurrentLearning(data);
  //     });
  // }


  return (
    <div className="home-style">
      <h2>Admin Mode</h2>
    </div>
  );
}

export default AdminHome;
