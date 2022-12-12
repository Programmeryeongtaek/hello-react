import { useState, useLayoutEffect } from "react";

const App = () => {
  const [name, setName] = useState('');

  useLayoutEffect(() => {
    setName("오영택");
  }, []);

  return (
    <div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
    </div>
  );
};

export default App;