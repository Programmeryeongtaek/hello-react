import { useRef, useEffect } from 'react';

function useInterval(callback, delay) {
  const savedcallback = useRef();

  useEffect(() => {
    savedcallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedcallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedcallback.current;
}

export default useInterval;