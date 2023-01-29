import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AlbumView.css";
import { convertToMinSec, sumConvertToMinSec } from "./../../../service/util";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconWithName from "../../sidebar/IconWithName/IconWithName";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { setCurrentAlbum, setTrack } from "../../../redux-conf/slices/playerSlice";

function AlbumView() {
  const dispatch = useDispatch();
  const [tracks, setTracks] = useState([]);
  const location = useLocation();
  const albumData = location.state ? location.state.albumData : "";
  useEffect(() => {
    setTracks(albumData.musicFiles);
  }, [albumData.musicFiles]);

  function setPlayerData(track) {
    console.log(track);
    dispatch(setTrack(track));
    dispatch(setCurrentAlbum(albumData));
  }
  return (
    <div>
      <section className="top-track-view">
        <img src={albumData.albumArt} alt={albumData.albumName} />
        <ul>
          <li>PlayList</li>
          <li>{albumData.albumName}</li>
          <li>{albumData?.description}</li>
          <li>
            {`${albumData.creatorName} • ${tracks.length} Songs,`}{" "}
            <span style={{ opacity: "0.4" }}>{sumConvertToMinSec(tracks)}</span>
          </li>
        </ul>
      </section>
      <div className="track-view">
        {tracks && (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Date Added</th>
                <th></th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track, i) => (
                <tr
                  key={track.id}
                  className="track-node"
                  onClick={() => setPlayerData(track)}
                >
                  <td>{i + 1}</td>
                  <td>{track.musicName}</td>
                  <td>{albumData.creatorName}</td>
                  <td>
                    {moment(
                      track.createdDate,
                      "YYYY-MM-DDTHH:mm:ss.SSS"
                    ).format("ll")}
                  </td>
                  <td>
                    <IconWithName Icon={FavoriteBorderIcon} active="false" />
                  </td>
                  <td>{convertToMinSec(track.duration, ":")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AlbumView;
