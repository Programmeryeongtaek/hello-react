import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>State editing to see same mahic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

export default App;

/*
위의 함수를 클래스 형태로 만든다면
class AppYgly extends React.Component {
  state = {
    item: 1
  }
  render() {
    const { item } = this.state;
    return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>State editing to see same mahic happen!</h2>
      <button onClick={this.incrementItem}>Increment</button>
      <button onClick={this.decrementItem}>Decrement</button>
    </div>
    );
  }
  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  }
  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item 1 1
      }
    })
  }
}
*/