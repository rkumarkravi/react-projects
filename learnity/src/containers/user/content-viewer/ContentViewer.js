import React,{useState,useEffect} from 'react'
import './ContentViewer.css';
import { useParams,useLocation, Link } from "react-router-dom";
import http from './../../../core/http';
import CMediator from '../../common/view/c-mediator-view/CMediatorView';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import  IconButton  from '@mui/material/IconButton';

export default function ContentViewer() {
let { topicId } = useParams();
const location=useLocation();
const topicTitle=location.state ? location.state.topicTitle :"";
const courseId=location.state ? location.state.courseId :"";
  const [contentData, setContentData] = useState([]);
  let urlCurrentTopic = "content/get/" + topicId;
  
  useEffect(() => {
    http
      .getMessage(urlCurrentTopic)
      .then((data) => {
        console.log(data);
        setContentData(data.payload);
      })
      .catch((exp) => console.log(exp));
  }, []);
  return (
    <div className='content-view-style'>
          <div style={{ display: "flex", flexDirection: "row", gap: "1em","color":"white",alignItems: "center" }}>
          <Link to={`/user/topic/${courseId}`}>
            <IconButton onClick={() => {}}>
              <ChevronLeftIcon fontSize="large" sx={{color:"white"}}/>
            </IconButton>
          </Link>
          <h2>{topicTitle}</h2>
        </div>
        {contentData.map(x=> <CMediator data={x} key={x.contentId}/>)}
    </div>
  )
}
