// 인풋을 만드고 숫자를 입력하고 버튼을 누르면
// 인풋 아래에 입력한 숫자에 2배를 출력하는 컴포넌트를 만들어라

import { useState } from 'react';

const Print = () => {
  const [value, setValue] = useState('');

  const valuePrint = e => {
    setValue(e.terget.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={valuePrint}/>
      <input type="text" value={setValue} oncChange={} />
      <button onClick={() => setValue(value * 2)}></button>

    </div>
  )
}

export default Print;


/*
function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}


const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");
}
*/