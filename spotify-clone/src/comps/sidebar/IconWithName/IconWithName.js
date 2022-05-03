import React from "react";
import "./IconWithName.css";
function IconWithName({ Icon, title, active }) {
  return (
    <div
      className={active === "true" ? "IconWithName--active" : "IconWithName"}
    >
      <Icon fontSize="large" />
      <h4>{title}</h4>
    </div>
  );
}

export default IconWithName;
