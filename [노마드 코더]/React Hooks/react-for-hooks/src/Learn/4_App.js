import React, { useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";

function clickOutside(fn) {
  const ref = createRef();
  const handleClick = e => {
    if(!ref.current.contains(e.target)) {
      fn();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick)
  }, []);
  return ref;
}

function App() {
  const onClickOutside = () => {
    console.log("lalala")
  }
  const ref = clickOutside(onClickOutside);
  return (
    <div className="App">
      <div ref={ref}>
      <h1>Hello Nicolas</h1>
      <h2>This should be a popup</h2>
      </div>
      <input type="text"/>
    </div>
  );
}

export default App;