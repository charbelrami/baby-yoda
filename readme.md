# baby-yoda

> A tiny (537B) layout animation module for react

- 🥚 **tiny**
- 🛸 **fast**: [FLIP animations](https://aerotwist.com/blog/flip-your-animations/) and Web Animations API
- 🧙‍♂️ **uses The Force**: magically animate layout changes like a Jedi
- 🐸 eats frogs
- 🍪 steals cookies
- 🤖 has a droid friend
- 👀 follows you

![Baby yoda](https://media.giphy.com/media/AcfTF7tyikWyroP0x7/giphy.gif)

## Examples

- [codesandbox](https://codesandbox.io/s/baby-yoda-list-example-s2qyp?file=/src/App.js)

## Installation

```bash
npm install baby-yoda
```

## Usage

```js
import { Grogu } from "baby-yoda";
```

```js
function App() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
      <div
        style={{
          width: "100px",
          background: "#44a0a7",
          display: "flex",
          justifyContent: toggle ? "flex-end" : "flex-start",
        }}
      >
        <Grogu>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#79c3c9",
            }}
          ></div>
        </Grogu>
      </div>
    </>
  );
}
```
