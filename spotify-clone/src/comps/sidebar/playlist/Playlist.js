import React, { useEffect } from "react";
import { useState } from "react";
import "./Playlist.css";
function Playlist() {
  const [playlistData, setPlaylist] = useState([]);
  useEffect(() => {
    setPlaylist([
      "My Shazam Tracks",
      "Bass Boosted 2022 🔊",
      "TOP POP HITS 2022",
      "Big Room EDM 2022 🔥 | Squid Game Remix",
      "Nature Noises (10 Hours) Nature Sounds, Soothing Sounds, Forest Sounds, Calming Nature Noise",
      "lofi coding",
      "Relaxing Piano - Study, Work & more",
      "TOP POP HITS 2022",
      "Big Room EDM 2022 🔥 | Squid Game Remix",
      "Nature Noises (10 Hours) Nature Sounds, Soothing Sounds, Forest Sounds, Calming Nature Noise",
      "lofi coding",
      "Relaxing Piano - Study, Work & more",
      "My Shazam Tracks",
      "Bass Boosted 2022 🔊",
      "TOP POP HITS 2022",
      "Big Room EDM 2022 🔥 | Squid Game Remix",
      "Nature Noises (10 Hours) Nature Sounds, Soothing Sounds, Forest Sounds, Calming Nature Noise",
      "lofi coding",
      "Relaxing Piano - Study, Work & more",
      "TOP POP HITS 2022",
      "Big Room EDM 2022 🔥 | Squid Game Remix",
      "Nature Noises (10 Hours) Nature Sounds, Soothing Sounds, Forest Sounds, Calming Nature Noise",
      "lofi coding",
      "Relaxing Piano - Study, Work & more",
    ]);
  }, []);
  return (
    <div className="playlist">
      {playlistData.length > 0 &&
        playlistData.map((x, i) => <p key={i}>{x}</p>)}
    </div>
  );
}

export default Playlist;
