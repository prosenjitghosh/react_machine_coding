import React from "react";
import { useCounter } from "../hooks/useCounter";

export function CounterDemo() {
  const { value, increment, decrement, reset } = useCounter(5, 2);

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={() => increment()}>+2</button>
      <button onClick={() => increment(5)}>+5</button>
      <button onClick={() => decrement()}>-2</button>
      <button onClick={() => decrement(3)}>-3</button>
      <button onClick={() => reset()}>Reset (5)</button>
      <button onClick={() => reset(0)}>Reset (0)</button>
    </div>
  );
}
