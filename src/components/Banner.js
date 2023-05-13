import React from "react";
import "../styles/Banner.css";

export default function Banner() {
  return (
    <div>
      <video autoPlay loop muted className="banner-576">
        <source src="../images/banner-576.mp4" />
      </video>
      <video autoPlay loop muted className="banner-768">
        <source src="../images/banner-768.mp4" />
      </video>
      <video autoPlay loop muted className="banner-992">
        <source src="../images/banner-992.mp4" />
      </video>
      <video autoPlay loop muted className="banner-1200">
        <source src="../images/banner-1200.mp4" />
      </video>
    </div>
  );
}
