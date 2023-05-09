import React from "react";
import "../styles/Benefits.css";

export default function Benefits() {
  return (
    <div className="">
      <div className="text-center benefits-header p-3">
        Benefits of working with a web developer (me!):
      </div>
      <div className="benefits-text p-3">
        <ul>
          <li className="p-2">
            TIME : Since you won't have to construct the website yourself, you
            will save yourself a lot of time by allowing me to help you bring
            your vision to life.
          </li>
          <li className="p-2">
            CUSTOMIZATION : Your website will be completely customizable as I
            construct my projects using HTML, CSS, JavaScript, Bootstrap, and
            ReactJS.
          </li>
          <li className="p-2">
            COMMUNICATION : Being able to communicate with another person can be
            easier than talking to a computer so you will be able to express all
            of your wants and concerns with me!
          </li>
        </ul>
      </div>
    </div>
  );
}
