import "./App.css";

function App() {
  const name = undefined;
  return <div>{name || "리액트"}</div>;

  /*
  1) 오류 발생
  return name;
  
  2) OR(||) 연산자를 사용하면 해당 값이 undefined일 떄 사용할 값을 지정할 수 있으므로 간단하게 오류를 방지할 수 있다.
  return name || '값이 undefined입니다.';

  3) JSX 내부에서 undefined를 렌더링하는 것은 괜찮다. // 1)번과 비교
  return <div>{name}</div>;

  $) name 값이 undefined일 때 보여 주고 싶은 문구가 있다면,
  <div>{name || '리액트'}</div>;

*/
}

export default App;
