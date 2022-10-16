function App() {
  /* 1) style 객체를 미리 선언하고 div의 style 값으로 지정 */
  const name = "리액트";
  const style = {
    qbackgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return <div style={style}>{name}</div>;

  /* 2) 미리 선언하지 않고 바로 style 값을 지정 
  const name2 = '리액트';
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'aquqa',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16
      }}
    >
      {name2}
    </div>
  );
  */
}

export default App;
