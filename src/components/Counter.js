import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");

  const add = () => {
    if (!number) {
      setCount(count + 1);
    } else {
      setCount(count + Number(number));
    }
  };

  const sub = () => {
    if (!number) {
      setCount(count - 1);
    } else {
      setCount(count - Number(number));
    }
  };

  const multiply = () => {
    if (!number) {
      setCount(count * 3);
    } else {
      setCount(count * Number(number));
    }
  };

  const divide = () => {
    if (!number) {
      setCount(count / 3);
    } else {
      setCount(count / Number(number));
    }
  };

  return (
    <div>
      <label htmlFor="input">Number</label>
      <input
        type="number"
        id="input"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Substract</button>
      <button onClick={multiply}>*3</button>
      <button onClick={divide}>/3</button>
      Current value is: {count}
    </div>
  );
};

export default Counter;
