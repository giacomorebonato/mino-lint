import { useState } from "react";
import "./App.css";
import { linter } from "./linter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={async () => {
          const messages = linter.verify(
            "var foo = 0",
            {
              rules: {
                semi: "error",
              },
            },
            { filename: "foo.js" }
          );
          console.log(messages);
        }}
      >
        Lint
      </button>
    </div>
  );
}

export default App;
