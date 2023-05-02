import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import About from "./About";


export default function Main() {
  return (
    <div>
      <div className="main p-5">
        <div className="title text-center">Hey! My name is Nya Shanice.</div>
        <div className="subtitle text-center">
          web developer (web di-'ve-lə-pər) : creating websites for service
          based businesses
        </div>
      </div>
      <About />
    </div>
  );
}
