import React,{useState,useEffect} from 'react'
import './ContentViewer.css';
import { useParams,useLocation } from "react-router-dom";
import http from './../../../core/http';
import CMediator from './../../common/c-mediator/CMediator';

export default function ContentViewer() {
let { topicId } = useParams();
const location=useLocation();
const topicTitle=location.state ? location.state.topicTitle :"";
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
    <div>
        <h2>{topicTitle}</h2>
        {contentData.map(x=> <CMediator data={x}/>)}
    </div>
  )
}
