import React from 'react';
import {useState, useRef} from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('yeongtaek');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      value('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label id='label' htmlFor='wordInput'>글자를 입력하세요.</label>
        <input 
          id='wordInput'
          className='wordInput'
          ref={inputRef} 
          value={value} 
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );

}

export default WordRelay;