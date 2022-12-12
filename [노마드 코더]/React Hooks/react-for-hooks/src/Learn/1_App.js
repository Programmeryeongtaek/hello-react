// [useState]에 관한 내용
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = e => {
    const {
      target: { value }
    } = e;
    setEmail(value);
  };
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input placeholder="Email" value={email} onChange={updateEmail}/>
    </>
  );
}

export default App;

/*
[클래스형으로 작성]
import { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };
  modify = (n) => {
    this.setState({
      count:n
    });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <div>{count}</div>
        <button onClick={() => this.modify(count + 1)}>Increment</button>
      </>
    );
  }
}

export default App;
*/