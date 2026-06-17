import { useState } from "react";

export default function ItemCount() {
  const [count, setCount] = useState(1);

  return (
    <div className="count-container">
      <button onClick={() => count > 1 && setCount(count - 1)}>-</button>

      <span>{count}</span>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
