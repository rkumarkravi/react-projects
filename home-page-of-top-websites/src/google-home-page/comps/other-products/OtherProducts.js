import React from "react";
import "./OtherProducts.css";
import productIcons from "./../../imgs/p1_89c36882.png";
import Card from "@mui/material/Card";
const products = [
  {
    name: "Search",
    logoPos: "0 -1035px",
  },
  {
    name: "Maps",
    logoPos: "0 -1311px",
  },
  {
    name: "Youtube",
    logoPos: "0 0",
  },
  {
    name: "Play",
    logoPos: "0 -759px",
  },
  {
    name: "News",
    logoPos: "0 -2760px",
  },
  {
    name: "Gmail",
    logoPos: "0 -1104px",
  },
  {
    name: "Meet",
    logoPos: "0 -2691px",
  },
  {
    name: "Chat",
    logoPos: "0 -138px",
  },{
    name:'Drive',
    logoPos:'0 -2001px'    
  }
];
function OtherProducts() {
  return (
    <Card>
      <div className="grid-style">
        {products.map((a, index) => (
          <div className="bind-icon-with-text">
          <div
            key={index}
            className="other-style-product"
            style={{ backgroundImage: `url(${productIcons})`,backgroundPosition:`${a.logoPos}` }}
          >
          </div>
          <div>{a.name}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default OtherProducts;
