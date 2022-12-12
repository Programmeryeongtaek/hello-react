import React, { useRef, useState } from 'react';
import { isInputElement } from 'react-router-dom/dist/dom';
import Try from './Try';

const getNumbers = () => {
  const candidates = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런!');
      setTries((prevState) => {
        return [...prevState.tries, { try: value, result: '홈런!'}]
      });
      alert('게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
      isInputElement.current.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다.`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        isInputElement.current.focus();
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => [...prevTries, {try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다`}]);
        setValue('');
        isInputElement.current.focus();
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{this.state.result}</h1>
      <form onSubmit={onSubmitForm}>
        <input 
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {(() => {
          const array = [];
          for (let i = 0; i < tries.length; i++) {
            array.push(<Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />)
          }
          return array;
        })()}
      </ul>
    </>
  );
}

export default NumberBaseball;