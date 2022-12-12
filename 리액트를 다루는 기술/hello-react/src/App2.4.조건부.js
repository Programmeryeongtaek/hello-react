function App() {
  const name = "리액트";
  return (
    <div>
      {name}를 가지고 놀자!
      {/* 
    1) 자바스크립트 표현
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?<h2>
      
    2) If문 대신 조건부 연산자
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    
    3) AND 연산자(&&)를 사용한 조건부 렌더링
      {name === "리액트" ? <h1>리액트입니다.</h1> : null}
      {name === "리액트" && <h1>리액트입니다.</h1>}
    */}
    </div>
  );
}

export default App;
