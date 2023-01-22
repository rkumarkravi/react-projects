import React, { forwardRef } from "react";
import CCodeEdit from "../c-text-edit/CCodeEdit";
import CTextEdit2 from "./../c-text-edit/CTextEdit2";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import http from "./../../../../core/http";
import EditIcon from '@mui/icons-material/Edit';
import CImageEdit from './../c-img-edit/CImageEdit';

function CMediatorEdit(props, ref) {
  const data = props.data;
  function returnContent() {
    // console.log("mediator",data);
    switch (data.type) {
      case "PARAGRAPH":
        return <CTextEdit2 {...props} ref={ref} />;
      case "LINK":
        return (
          <a href={data.value} target="_blank" rel="noreferrer">
            {data.value}
          </a>
        );
      case "IMAGE_LINK":
        return (
          <img
            src={data.value}
            alt={data.id}
            style={{ ...JSON.parse(data.style) }}
          />
        );
        case "IMAGE_FILE":
        return (
          <CImageEdit
            src={data.value}
            style={{ ...JSON.parse(data.style) }}
          />
        );
      case "CODE":
        return <CCodeEdit {...props} ref={ref} />;
      default:
        return <h1>Not compaitable</h1>;
    }
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let urlDeleteBlock = `content/delete/`;
  let deleteContent = function (contendId) {
    http
      .deleteMessage(`${urlDeleteBlock}${contendId}`)
      .then((data) => {
        console.log("data", data);
      })
      .catch((exp) => console.log(exp));
  };
  return (
    <>
      <div onClick={() => props?.onClick} onContextMenu={handleClick}>
        {returnContent()}
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {data.contentId && (
          <MenuItem onClick={()=>deleteContent(data.contentId)}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            Delete
          </MenuItem>
        )}
        <MenuItem onClick={()=>props.onEdit()}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            Edit
          </MenuItem>
        {/* <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}
      </Menu>
    </>
  );
}

export default forwardRef(CMediatorEdit);
