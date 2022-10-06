import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  const onClickEnter2 = () => setMessage('실험중입니다.');
  const onClickLeave2 = () => setMessage('테스트 중이에요오오오');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={onClickEnter2}>테스트</button>
      <button onClick={onClickLeave2}>테스트2</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
      <button style={{ color: 'orange' }} onClick={() => setColor('orange')}>
        오렌지색
      </button>
      <button style={{ color: 'violet' }} onClick={() => setColor('violet')}>
        보라색
      </button>
    </div>
  );
};

export default Say;