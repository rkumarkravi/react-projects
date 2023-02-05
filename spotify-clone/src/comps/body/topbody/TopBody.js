import React, { useState, useEffect } from "react";
import TrackRow from "./../tracks/TrackRow";
import Greeting from "./greeting/Greeting";
import "./TopBody.css";
// import * as myConstClass from "../../../data/TrackData";
import {axios} from "../../../service/dataService";
function TopBody() {
  const [adata, setAdata] = useState([]);
  const [pdata, setPdata] = useState([]);
  useEffect(() => {
    //console.log(myConstClass.playList);
    axios.get('album/getAll').then(res=>{
      setAdata(res.data);
    });
    // axios.get(`playlist/getAllPlayList/1`).then(res=>{
    //   setPdata(res.data);
    // });
    //setPdata(myConstClass.playList.sort((x) => 0.5 - Math.random()));
  }, []);
  return (
    <div className="main-style">
      <Greeting />
      <div className="track-row">
        <TrackRow data={pdata} type="image-title" />
        <TrackRow
          trackTitle="New Collection"
          data={adata}
          type="big-image-title"
        />
        {/* <TrackRow
          trackTitle="Made for Ravi"
          data={adata}
          type="big-image-title"
        />
        <TrackRow
          trackTitle="Recently played"
          data={adata}
          type="big-image-title"
        />
        <TrackRow
          trackTitle="Episodes for you"
          data={adata}
          type="big-image-title"
        />
        <TrackRow
          trackTitle="Made for Ravi"
          data={adata}
          type="big-image-title"
        />
        <TrackRow
          trackTitle="Recently played"
          data={adata}
          type="big-image-title"
        /> */}
      </div>
    </div>
  );
}

export default TopBody;
