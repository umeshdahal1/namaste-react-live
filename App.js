const heading = React.createElment(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElment(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElment(
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
