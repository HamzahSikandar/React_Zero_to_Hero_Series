import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(10);
  function Decrement() {
    setCount(count - 1);
  }

  function Increment() {
    setCount(count + 1);
  }

  console.log(count);

  return (
    <div>
      <div className="main">
        <h3>Counter App</h3>
        <div className="numbers">{count}</div>

        <div className="buttons">
          <button
            style={{
              backgroundColor: "#7950f2",
              color: "#fff",
              fontSize: "24px",
            }}
            onClick={Decrement}
          >
            -
          </button>

          <button
            style={{
              backgroundColor: "#7950f2",
              color: "#fff",
              fontSize: "24px",
            }}
            onClick={Increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
