/*
** These are something that Parcel did for us. 
** HMR-  Hot Module Reload: It instantly load any change in file. 
** File Watcher Algorithm- C++ : File Watcher Algorithm keep track of all the files which are changing in real time and it tells the server reload.
** Bundling 
** Minify
** Cleaning our code: Remove console.log
** Dev and Production Build
** Super Fast build algorithm
** Image Optimization
** Caching while developement
** Compression
** Compatible with older version of browser
** HTTPS 


*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

// async defer

root.render(container);
