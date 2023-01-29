import React from "react";
import IconWithName from "./../../../sidebar/IconWithName/IconWithName";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { UserContext } from "../../../../App";

function TrackView({ obj, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{obj.musicName}</td>
      <td>{obj.createdDate}</td>
      <td >
        <IconWithName
          Icon={FavoriteBorderIcon}
          active="false"
        />
      </td>
      <td>{obj.contentType}</td>
    </tr>
  );
}

export default TrackView;
