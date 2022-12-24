import React, { useState, useEffect } from "react";

import "./UserHome.css";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import http from './../../../core/http';
function UserHome() {
  const [currentLearning, setCurrentLearning] = useState([]);
  const [programmingLangs, setProgrammingLangs] = useState([]);
  let urlCurrentLearning = "courses/";
  let urlProgrammingLangs = "courses/";

  const fetchCurrentLearing = () => {
      http.getMessage(urlCurrentLearning)
      .then((data) => {
        console.log(data);
        data.length = 4;
        setCurrentLearning(data.payload);
      });
  };

  const fetchProgrammingLangs = () => {
    http.getMessage(urlProgrammingLangs)
      .then((data) => {
        console.log(data);
        data.length = 4;
        setProgrammingLangs(data.payload);
      });
  };

  useEffect(() => {
    fetchCurrentLearing();
    fetchProgrammingLangs();
  }, []);

  return (
    <div className="home-style">
      <h2>Currently Reading</h2>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 250,
            height: 60,
          },
        }}
      >
        {currentLearning.map((x) => (
          <Paper
            elevation={3}
            key={x.title}
            className="paper-style"
            sx={{ backgroundColor: "paper.main" }}
          >
            <Link
              to={{ pathname: "/user/topic/" + x.courseId }} state={{ courseData:x }}
            >
              <div className="title-style">
                <h2>{x.title}</h2>
              </div>
            </Link>
          </Paper>
        ))}
      </Box>
      <h2>Programming Languages</h2>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 150,
            height: 150,
          },
        }}
      >
        {programmingLangs.map((x) => (
          <Paper
            elevation={3}
            key={x.title}
            className="paper-style"
            sx={{ backgroundColor: "paper.main" }}
          >
            <Link
               to={{ pathname: "/user/topic/" + x.courseId }} state={{ courseData:x }}
            >
              <div className="title-style">
                <h2>{x.title}</h2>
              </div>
              <div className="title-style-opaque">
                <h2>{x.title}</h2>
              </div>
            </Link>
          </Paper>
        ))}
      </Box>
    </div>
  );
}

export default UserHome;
