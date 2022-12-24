import React from "react";
import "./ResponsiveNavBar.css";
export default function ResponsiveNavBar({ logoname, imgSrc, name, homepage,menus }) {
  return (
    <div className="navbar">
      <a href={homepage}>
        <div className="logo-details">
          {imgSrc && <img src={imgSrc} alt="logo" className="logo-image" />}
          {logoname && <h5>{logoname}</h5>}
        </div>
      </a>
      <div className="menu-style">
        {menus && menus.split(',').map((x,i)=>(<a key={i} href={x}>{x}</a>))}
      </div>
    </div>
  );
}
