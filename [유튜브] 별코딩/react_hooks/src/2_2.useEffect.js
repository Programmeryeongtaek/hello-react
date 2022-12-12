import { useState } from "react";
import Timer from "./component/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setShowTimer(!showTimer)
      }}>Toggle Timer</button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;