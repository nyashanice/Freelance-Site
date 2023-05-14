import React from "react";
import IframeResizer from "iframe-resizer-react";
import { useEffect } from "react";

export default function Form() {
  useEffect(() => {
    let hecticFrame = document.getElementById("hectic-form");
    hecticFrame.src =
      "https://hello.withmoxie.com/01/the-faithful-pixel/inquiry-form?inFrame=true&sourceUrl=" +
      encodeURIComponent(window.location.href);
  }, []);

  const timeout = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("timeout");
    }, 10000);
  };

  return (
    <div>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js"
      />
      <div style={{ width: "100vw", height: "100vh" }}>
        <iframe
          id="hectic-form"
          title="title"
          allowtransparency="true"
          style={{ padding: "0px", margin: "0px", border: "0", width: "100%", height: '100%' }}
        ></iframe>
        <IframeResizer
          onLoad={timeout}
          heightCalculationMethod="max"
          sizeWidth="true"
          sizeHeight="true"
          log="false"
          checkOrigin="false"
        />
      </div>
    </div>
  );
}
