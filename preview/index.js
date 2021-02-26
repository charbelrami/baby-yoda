import React from "react";
import ReactDom from "react-dom";
import { Grogu } from "../src";

function shuffleArray(a) {
  for (let i = a.length; i--; ) {
    const j = Math.floor(Math.random() * (i + 1));
    if (i !== j) [a[i], a[j]] = [a[j], a[i]];
  }
  return [...a];
}

function App() {
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
          height: "500px",
        }}
      >
        <Grogu>
          <div
            style={{
              width: toggle ? "300px" : "500px",
              height: toggle ? "300px" : "200px",
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
        <Grogu>
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

const root = document.getElementById("root");

ReactDom.render(<App />, root);
