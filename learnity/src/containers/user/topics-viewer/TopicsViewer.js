import React, { useState, useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useParams,useLocation,useNavigate } from "react-router-dom";
import "./TopicsViewer.css";
import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "../../../config/Theme";
import http from "./../../../core/http";

function TopicViewer(props) {
  let { courseId } = useParams();
  const location=useLocation();
  let navigate = useNavigate();
  const courseData=location.state ? location.state.courseData :"";
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

  const navigateToRoute=function(obj){
    navigate(`/user/content/${obj.id}`,{state:{topicTitle:obj.title,courseId:courseId}});
  }

  return (
    <div className="topic-style">
      <h1>{courseData.title}</h1>

      <ThemeProvider theme={defaultTheme}>
        <TreeView
          aria-label={courseData.title}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{
            width: "auto",
          }}
        >
          {topicData
            ? topicData.map((topic, index) => {
                return (
                  <TreeItem
                    nodeId={topic.id}
                    label={index + 1 + ". " + topic.title}
                    key={index}
                    sx={{
                      padding: "1em",
                      backgroundColor: "topics.node.background",
                      marginTop: "0.2em",
                      color: "topics.node.foreground !important",
                    }}
                    onClick={()=>navigateToRoute(topic)}
                  >
                    {topic.subTopics &&
                      topic.subTopics.map((st, iIndex) => {
                        return (
                          <TreeItem
                            nodeId={st.id}
                            label={
                              index + 1 + "." + (iIndex + 1) + ". " + st.title
                            }
                            key={index + "-" + iIndex}
                            sx={{
                              padding: "1em",
                              backgroundColor: "topics.subnode.background",
                              marginTop: "0.2em",
                              color: "topics.subnode.foreground !important",
                            }}
                            onIconClick={()=>navigateToRoute(st)}
                          />
                        );
                      })}
                  </TreeItem>
                );
              })
            : "Comming soon!"}
        </TreeView>
      </ThemeProvider>
    </div>
  );
}

export default TopicViewer;
