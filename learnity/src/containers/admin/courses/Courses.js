import React, { useState, useEffect } from "react";
import http from "./../../../core/http";
import './Courses.css';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  let urlCourses = "courses/";
  const fetchCourses = () => {
    http.getMessage(urlCourses).then((data) => {
      console.log(data);
      data.length = 4;
      setCourses(data.payload);
    });
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return <div className="courses-style">
    <h2>Courses</h2>
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
        {courses.map((x) => (
          <Paper
            elevation={3}
            key={x.title}
            className="paper-style"
            sx={{ backgroundColor: "paper.main" }}
          >
            <Link
               to={{ pathname: "/admin/viewEditTopic/" + x.courseId }} state={{ courseData:x }}
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
  </div>;
}
