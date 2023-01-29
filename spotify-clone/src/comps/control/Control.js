import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import "./Control.css";
import { useSelector } from "react-redux";

const Widget = styled("div")(({ theme }) => ({
  padding: 5,
  width: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
  display: "grid",
  gridTemplateColumns: "35% 40% 14% 10%",
}));

const CoverImage = styled("div")({
  width: 70,
  height: 70,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function Control() {
  const currentTrack = useSelector((state) => state.player.currentPlayingTrack);
  const currentAlbum = useSelector((state) => state.player.currentAlbum);
  const mp= useSelector((state)=>state.player.mp);
  const theme = useTheme();
  const [duration, setDuration] = React.useState();
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value % 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  function playerPlayPause(state){
    if(state){
      mp.pause();
      setPaused(true);
    }else{
      mp.play();
      setPaused(false);
    }
  }
  function timeupdate(x){
    console.log(x.timeStamp);
    setPosition(mp.currentTime);
  }
  React.useEffect(()=>{
    setDuration(Math.floor(currentTrack.duration/1000));
    if(currentTrack){
      setPaused(false);
    }
    mp.addEventListener('timeupdate',timeupdate);
    return () => {
      mp.removeEventListener('timeupdate', timeupdate);
    };
  },[currentTrack,mp])
  const mainIconColor = theme.palette.mode === "dark" ? "#000" : "#fff";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  return (
    currentTrack &&  <div className="Control">
      <Widget>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img
              alt={currentTrack.musicName}
              src={currentAlbum.albumArt}
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={500}
            >
              {currentAlbum.creatorName}
            </Typography>
            <Typography noWrap>
              <b>{currentTrack.musicName}</b>
            </Typography>
            {/* <Typography noWrap letterSpacing={-0.25}>
              {currentTrack.musicName}
            </Typography> */}
          </Box>
        </Box>
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: -1,
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused ? "play" : "pause"}
              onClick={() => playerPlayPause(!paused)}
            >
              {paused ? (
                <PlayArrowRounded
                  sx={{ fontSize: "3rem" }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded
                  sx={{ fontSize: "3rem" }}
                  htmlColor={mainIconColor}
                />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={mp.duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                      ? "rgb(255 255 255 / 16%)"
                      : "rgb(0 0 0 / 16%)"
                  }`,
                },
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>{formatDuration(mp.duration)}</TinyText>
          </Box>
        </div>
        <div></div>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, px: 1 }}
          alignItems="center"
        >
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            min={0}
            step={0.1}
            max={1}
            onChange={(event)=>{mp.volume=event.target.value}}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 10,
                height: 10,
                backgroundColor: "#fff",
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack>
      </Widget>
    </div>
  );
}
