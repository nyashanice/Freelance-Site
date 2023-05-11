import React from "react";
import "../styles/Banner.css";

export default function Banner() {
  return (
    <div>
      <img
        src="../images/banner.gif"
        width="100%"
        height="500"
        alt=""
        className="banner-lg"
      />
      <img
        src="../images/banner-md.gif"
        alt=""
        width="100%"
        height="500"
        className="banner-md"
      />
    </div>
  );
}
