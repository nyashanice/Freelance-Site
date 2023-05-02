import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

export default function About() {
  return (
    <div>
      <div>
        <h1 className="text-center m-3">About Me</h1>
        <div className="body d-flex flex-row m-3">
          <div>
            <img className="bioPics" src="../images/bio.png" alt=""></img>
          </div>
          <div className="bio">
            <div className="p-2">
              My name is Nya and I'm an Atlanta based web developer. My coding
              journey started late in 2022 and I graduated from Georgia
              Institute of Technology's full stack coding bootcamp in March
              2023.
            </div>
            <div className="p-2">
              I have always had a love for STEM and I graduated with a B.S. in
              biology in December 2022. I grew to love coding because of the
              freedom it gives me to be creative and continue learning. It
              allows me to challenge myself which I also appreciate. Being in a
              position to help others showcase their talents and abilities
              brings me joy.
            </div>
            <div className="p-2">
              During the bootcamp, I learned laguages and used libraries such as
              MERN stack (MongoDB, Express.js, ReactJS, Node.js), HTML5, CSS3,
              JavaScript ES6, MySQL, NoSQL, API integration, and object oriented
              programming.
            </div>
            <div className="p-2">
              In my free time I enjoy creating content on YouTube, Instagram,
              and TikTok, cooking, reading, and most of all: traveling!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
