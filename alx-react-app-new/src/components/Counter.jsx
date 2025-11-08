// src/components/Counter.jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: 12,
        border: "1px solid #ccc",
        display: "inline-block",
        borderRadius: 8,
      }}
    >
      <p style={{ margin: "8px 0" }}>
        Current Count: <strong>{count}</strong>
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
