import React, { useState, useEffect } from "react";
import TrackRow from "./../tracks/TrackRow";
import Greeting from "./greeting/Greeting";
import "./TopBody.css";
import * as myConstClass from "../../../data/TrackData";
function TopBody() {
  const [pdata, setPdata] = useState([]);
  useEffect(() => {
    console.log(myConstClass.playList);
    setPdata(myConstClass.playList.sort((x) => 0.5 - Math.random()));
  }, []);
  return (
    <div className="main-style">
      <Greeting />
      <div className="track-row">
        <TrackRow data={pdata} type="image-title" />
        <TrackRow
          trackTitle="Episodes for you"
          data={pdata}
          type="big-image-title"
        />
        <TrackRow
          trackTitle="Made for Ravi"
          data={pdata}
          type="big-image-title"
        />
        <TrackRow
          trackTitle="Recently played"
          data={pdata}
          type="big-image-title"
        />
        <TrackRow
          trackTitle="Episodes for you"
          data={pdata}
          type="big-image-title"
        />
        <TrackRow
          trackTitle="Made for Ravi"
          data={pdata}
          type="big-image-title"
        />
        <TrackRow
          trackTitle="Recently played"
          data={pdata}
          type="big-image-title"
        />
      </div>
    </div>
  );
}

export default TopBody;
