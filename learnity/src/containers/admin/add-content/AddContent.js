import React, { useState, useEffect, createRef } from "react";
import "./AddContent.css";
import Box from "@mui/material/Box";
import { useParams, useLocation } from "react-router-dom";
import http from "./../../../core/http";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import AttachmentIcon from "@mui/icons-material/Attachment";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CodeIcon from "@mui/icons-material/Code";
import AddLinkIcon from "@mui/icons-material/AddLink";
import CMediatorEdit from "../../common/edit/c-mediator-edit/CMediatorEdit";
import Stylers from "../../common/edit/stylers/Stylers";
import CButton from "../../common/Botton/CButton";
import CSnackbar from "../../common/CSnackbar";
import { cloneDeep } from "lodash";
import SnackBarContext from "../../../core/contexts/SnackbarContext";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

const actions = [
  { icon: <ViewHeadlineIcon />, name: "Paragraph", value: "PARAGRAPH" },
  { icon: <InsertPhotoIcon />, name: "Image Link", value: "IMAGE_LINK" },
  { icon: <AttachmentIcon />, name: "Image File", value: "IMAGE_FILE" },
  { icon: <AddLinkIcon />, name: "Link", value: "LINK" },
  { icon: <CodeIcon />, name: "code", value: "CODE" },
];

const defaultStyle = JSON.stringify({
  backgroundColor: "primary.dark",
  textSize: "auto",
  fontFamily: "Arial",
  color: "white",
});

export default function AddContent() {
  let { topicId } = useParams();
  const location = useLocation();
  const topicTitle = location.state ? location.state.topicTitle : "";
  const courseId = location.state ? location.state.courseId : "";
  const [contentData, setContentData] = useState([]);
  const [currentStyling, setCurrentStyling] = useState(null);
  const [snackData, setSnackData] = useState({ open: false, msg: "" });
  let urlCurrentTopic = `content/get/${topicId}`;
  let urlSaveContent = `content/add/${topicId}`;

  useEffect(() => {
    http
      .getMessage(urlCurrentTopic)
      .then((data) => {
        console.log("data", data);
        data.payload.forEach((x) => (x.ref = createRef()));
        console.log("content set", data.payload);
        setContentData(data.payload);
      })
      .catch((exp) => console.log(exp));
  }, []);

  let addContentType = function (type) {
    let obj = {
      type: type,
      value: "",
      order: contentData.length + 1,
      style: defaultStyle,
      ref: createRef(),
    };
    console.log("object in content added ", obj);
    setContentData((prevState) => {
      return [...prevState, obj];
    });
  };

  const computeValues = function () {
    // contentData.forEach(x=>console.log(x.ref.current.data.value));

    let value = "";
    contentData.forEach((x) => {
      switch (x.type) {
        case "PARAGRAPH":
          // value = contentData[0].ref.current.firstChild.firstChild.innerText;
          value = x.ref.current.innerText;
          break;
        case "LINK":
          value = x.ref.current.firstChild.firstChild.innerText;
          break;
        case "IMAGE_LINK":
          value = x.ref.current.firstChild.firstChild.innerText;
          break;
        case "CODE":
          value = x.ref.current.firstChild.firstChild.innerText;
          break;
        default:
          value = "";
      }

      x.value = value;
    });

    let dataToSave = cloneDeep(contentData);
    dataToSave.forEach((x) => delete x.ref);
    console.log("data to save:", dataToSave);
    postData(dataToSave);
  };

  function postData(data) {
    setSnackData({ open: true, msg: "saved successfully!" });
    http
      .postMessage(urlSaveContent, data)
      .then((data) => {
        console.log(data);
        setContentData((x) => [...data.payload]);
      })
      .catch((exp) => console.log(exp));
  }

  function onChangeOfStyle(cs, order) {
    cs = JSON.parse(JSON.parse(cs));
    console.log(cs);
    let data = [...contentData];
    data.forEach((item) => {
      if (item.order === order) {
        item.style = JSON.stringify({ ...cs });
      }
    });
    setContentData((x) => data);
    console.log("final object:", contentData);
  }
  function styleToState(sty) {
    console.log("setting style:", sty);
    setCurrentStyling(sty);
  }

  return (
    <div className="add-topic">
      <div className="content-container">
        <div style={{ display: "flex", flexDirection: "row", gap: "1em","color":"white",alignItems: "center" }}>
          <Link to={`/admin/viewEditTopic/${courseId}`}>
            <IconButton onClick={() => {}}>
              <ChevronLeftIcon fontSize="large" sx={{color:"white"}}/>
            </IconButton>
          </Link>
          <h2>Add/Edit Content | {topicTitle}</h2>
        </div>
        <div className="Content">
          {contentData &&
            contentData?.map((x, i) => (
              <CMediatorEdit
                onEdit={() => styleToState(x)}
                data={x}
                key={i}
                ref={x.ref}
              />
            ))}
        </div>
        <div>
          <Box sx={{ position: "relative" }}>
            <SpeedDial
              ariaLabel="add content type"
              icon={<SpeedDialIcon />}
              direction={"right"}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => addContentType(action.value)}
                />
              ))}
            </SpeedDial>
          </Box>
        </div>
      </div>
      <Box
        className="tools-container"
        sx={{
          bgcolor: "#fff",
          height: "100vh",
          padding: "1em !important",
          display: "flex",
          alignItems: "baseline",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <CButton
          onClick={() => computeValues()}
          style={{ margin: "0 auto", width: "100%" }}
        >
          Save Content / Publish
        </CButton>

        {currentStyling && (
          <Stylers
            sty={currentStyling.style}
            order={currentStyling.order}
            onChangeOfStyle={onChangeOfStyle}
          />
        )}
      </Box>
      <SnackBarContext.Provider value={snackData}>
        <CSnackbar
          onClose={() => {
            setSnackData((x) => {
              return { ...x, open: false };
            });
          }}
        />
      </SnackBarContext.Provider>
    </div>
  );
}
