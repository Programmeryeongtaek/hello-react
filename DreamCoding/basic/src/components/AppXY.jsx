import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({x: 0, y: 0});

  return (
    <div 
      className='container'
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        setPosition({x: e.clientX, y: e.clientY});
        /* 
        Q.만약 수평으로 이동하게 하려면?
        setPosition((prev) => ({ x: e.clientX, y: prev.y }));
        setPosition((prev) => ({ ...prev, x: e.clientX }));
        */
      }}
    >
      <div 
        className='pointer' 
        style={{transform: `translate(${position.x}px, ${position.y}px)`}}
      />
    </div>
  );
}
