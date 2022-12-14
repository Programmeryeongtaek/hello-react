import { useEffect, useState } from "react";

function Hello() {
  /*
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("hu :)");
    return byFn;
  }
  */
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  )
}

export default App;