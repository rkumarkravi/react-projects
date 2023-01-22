import React, { useRef } from "react";
import CButton from "../../Botton/CButton";

export default function Stylers(props) {
  const tRef = useRef();
  function sendDataToParentAndUpdateStyle(value) {
    console.log(value);
    let cstyle = JSON.stringify(value);
    props.onChangeOfStyle(cstyle, props.order);
  }
  return (
    <div
      style={{
        display: "flex",
        "flexDirection": "column",
        "alignItems": "flexStart", gap: "1em",width: "100%"
      }}
    >
      <textarea
        style={{ width: "100%",
        height: "291px",
        border: "none" }}
        defaultValue={props.sty ? props.sty : {}}
        ref={tRef}
      ></textarea>
      <CButton sx={{width:"100%"}}
        onClick={() => sendDataToParentAndUpdateStyle(tRef.current.value)}
      >
        Save
      </CButton>
    </div>
  );
}
