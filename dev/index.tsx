import React from "react";
import { createRoot } from "react-dom/client";
import { Grogu } from "../src";

function shuffleArray(a) {
  for (let i = a.length; i--; ) {
    const j = Math.floor(Math.random() * (i + 1));
    if (i !== j) [a[i], a[j]] = [a[j], a[i]];
  }
  return [...a];
}

function Root() {
  const [toggle, setToggle] = React.useState(false);

  const [list, setList] = React.useState([
    { id: 0, title: "item 0" },
    { id: 1, title: "item 1" },
    { id: 2, title: "item 2" },
    { id: 3, title: "item 3" },
    { id: 4, title: "item 4" },
  ]);

  return (
    <React.StrictMode>
      <button onClick={() => setList((prev) => shuffleArray(prev))}>
        shuffle
      </button>

      {list.map((item) => (
        <Grogu key={item.id}>
          <div>{item.title}</div>
        </Grogu>
      ))}

      <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: "20rem",
        }}
      >
        <Grogu duration={1000}>
          <div
            style={{
              transformOrigin: "0 0",
              width: toggle ? "20rem" : "25rem",
              height: toggle ? "20rem" : "10rem",
              background: "#79c3c9",
            }}
          ></div>
        </Grogu>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: toggle ? "flex-end" : "flex-start",
          width: "500px",
          background: "#44a0a7",
        }}
      >
        <Grogu duration={1000}>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "#79c3c9",
            }}
          ></div>
        </Grogu>
      </div>
    </React.StrictMode>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
