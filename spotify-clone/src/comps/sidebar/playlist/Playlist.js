import React, { useEffect } from "react";
import { useState } from "react";
import { axios } from "../../../service/dataService";
import "./Playlist.css";
function Playlist() {
  const [playlistData, setPlaylist] = useState([]);
  useEffect(() => {
    // setPlaylist([
    //   "My Shazam Tracks",
    //   "Bass Boosted 2022 🔊",
    //   "TOP POP HITS 2022",
    //   "Big Room EDM 2022 🔥 | Squid Game Remix",
    //   "Nature Noises (10 Hours) Nature Sounds, Soothing Sounds, Forest Sounds, Calming Nature Noise",
    //   "lofi coding",
    //   "Relaxing Piano - Study, Work & more",
    //   "TOP POP HITS 2022",
    //   "Big Room EDM 2022 🔥 | Squid Game Remix",
    //   "Nature Noises (10 Hours) Nature Sounds, Soothing Sounds, Forest Sounds, Calming Nature Noise",
    //   "lofi coding",
    //   "Relaxing Piano - Study, Work & more",
    //   "My Shazam Tracks",
    //   "Bass Boosted 2022 🔊",
    //   "TOP POP HITS 2022",
    //   "Big Room EDM 2022 🔥 | Squid Game Remix",
    //   "Nature Noises (10 Hours) Nature Sounds, Soothing Sounds, Forest Sounds, Calming Nature Noise",
    //   "lofi coding",
    //   "Relaxing Piano - Study, Work & more",
    //   "TOP POP HITS 2022",
    //   "Big Room EDM 2022 🔥 | Squid Game Remix",
    //   "Nature Noises (10 Hours) Nature Sounds, Soothing Sounds, Forest Sounds, Calming Nature Noise",
    //   "lofi coding",
    //   "Relaxing Piano - Study, Work & more",
    // ]);
    axios
      .get("playlist/getAllPlayList/1")
      .then((res) => {
        setPlaylist(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="playlist">
      {playlistData.length > 0 &&
        playlistData.map((x, i) => <p key={i}>{x.name}</p>)}
    </div>
  );
}

export default Playlist;
