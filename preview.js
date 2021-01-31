import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Grogu } from ".";

function App() {
  return (
    <StrictMode>
      <Grogu>
        <div>hi</div>
      </Grogu>
    </StrictMode>
  );
}

const root = document.getElementById("root");

render(<App />, root);
