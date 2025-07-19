import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col  w-full items-center justify-center h-screen">
      <h1>Counter (React)</h1>
      <h2>{count}</h2>
      <button onClick={incrementCounter}>Click Me!</button>
    </div>
  );
}

export default Counter;
