import React, { useState } from "react";

const Counter = () => {
  const [myCounter, setMyCounter] = useState(0);
  function decreaseFunction() {
    setMyCounter(myCounter - 1);
  }

  return (
    <div className="counter-main-container">
      <h1 className="header">Counter</h1>
      <div className="counter-inner-container">
        <h2>{myCounter}</h2>
        <button
          onClick={() => {
            setMyCounter(myCounter + 1);
          }}
        >
          Increase
        </button>
        <button onClick={decreaseFunction}>Decrease</button>
      </div> 
    </div>
  );
};

export default Counter;
