import React, { useState, useEffect } from "react";
import './ViewEditTopics.css';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import http from "./../../../core/http";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ViewEditTopics() {
  let { courseId } = useParams();
  const location = useLocation();
  let navigate = useNavigate();
  const courseData = location.state ? location.state.courseData : "";
  const [topicData, setTopicData] = useState([]);
  let urlCurrentTopic = "topics/" + courseId;

  useEffect(() => {
    http
      .getMessage(urlCurrentTopic)
      .then((data) => {
        console.log(data);
        setTopicData(data.payload);
      })
      .catch((exp) => console.log(exp));
  }, []);

  const navigateToRoute = function (obj) {
    navigate(`/admin/addContent/${obj.id}`, { state: { topicTitle: obj.title,courseId:courseId } });
  };
  return (
      <div className="view-edit-topic-style">
      <h2>View And Edit Topics</h2>
      <div className="topics-container">
        {topicData.map((t) => (
          <Card sx={{ minWidth: 275 }} key={t.id}>
            <CardContent>
              <Typography variant="h5" component="div">
                {t.title}
              </Typography>
              {/* <Typography variant="body2">
          well meaning and kindly.
        </Typography> */}
            </CardContent>
            <CardActions>
              <Button sx={{backgroundColor:"#101010",color:"#FFFFFF","&:hover": {"color":"black"}}} size="small">Edit</Button>
              <Button onClick={()=>navigateToRoute(t)} sx={{backgroundColor:"#101010",color:"#FFFFFF","&:hover": {"color":"black"}}} size="small">Add / Edit Content</Button>
            </CardActions>
          </Card>
        ))}
      </div>
      </div>
  );
}
