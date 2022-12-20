import { useState, useEffect, useRef } from 'react';

const Collapse = (props) => {
  const [open, setOpen] = useState(props.open ?? false);
  // <details> 요소를 가리키는 ref.
  // detailsRef.current는 <details> 요소를 가리킨다.
  const detailsRef = useRef(null);
  // <summary> 요소를 가리키는 ref.
  // summaryRef.current는 <summary> 요소를 가리킨다.
  const summaryRef = useRef(null);
  // 하단 영역의 <div>을 가리키는 ref.
  // contentRef.current는 해당 <div> 요소를 가리킨다.
  const contentRef = useRef(null);

  useEffect(() => {
    // <summary> 영역의 높이를 가져오는 방법
    const summaryHeight = summaryRef.current.scrollHeight;
    // 하단 영역 <div>의 높이를 가져오는 방법
    const contentHeight = contentRef.current.scrollHeight;
    // <details>가 접혔을 때 가져야 하는 높이
    const collapsedHeight = summaryHeight;
    // <details>가 열렸을 때 가져야 하는 높이
    const expandedHeight = summaryHeight + contentHeight;

    // 리액트의 useState로 만든 open의 값을 <details> 요소에 반영
    detailsRef.current.open = open;
    // <details> 요소의 높이를 open의 값에 따라 올바른 값으로 설정
    const detailsHeight = open ? expandedHeight : collapsedHeight;
    detailsRef.current.style.height = `${detailsHeight}px`;
  }, []);

  const toggle = (e) => {
    // <details> 태그의 기본 동작 비활성화
    e.preventDefault();

    if (detailsRef.current.open) {
      // <details>가 열려 있다가 클릭으로 인해 닫혀야 하는 경우에 대한 코드
      const summaryHeight = summaryRef.current.scrollHeight;
      const collapsedHeight = summaryHeight;
      // 리액트의 open 상태를 업데이트한다
      setOpen(false);
      // <details>가 닫히는 애니메이션이 끝나면 실제로 <details>를 닫는다
      detailsRef.current.addEventListener(
        'transitionend',
        () => {
          detailsRef.current.open = false;
        },
        { once: true }
      );

      // TODO: <details> 요소의 높이를 접혔을 때의 높이로 설정하기
      const detailsHeight = collapsedHeight;
      detailsRef.current.style.height = `${detailsHeight}px`;
    } else {
      // <details>가 닫혀 있다가 클릭으로 인해 열려야 하는 경우에 대한 코드

      // 리액트의 open 상태를 업데이트한다
      setOpen(true);
      detailsRef.current.open = true;

      // TODO: <details> 요소의 높이를 열렸을 때의 높이로 설정하기
      const summaryHeight = summaryRef.current.scrollHeight;
      const contentHeight = contentRef.current.scrollHeight;
      const expandedHeight = summaryHeight + contentHeight;
      detailsRef.current.style.height = `${expandedHeight}px`;
    }
  };

  return (
    <details
      ref={detailsRef}
      className="mx-4 bg-#ddd rounded overflow-hidden transition-all duration-500"
    >
      <summary
        ref={summaryRef}
        onClick={toggle}
        className="list-none p-2 w-full flex items-center"
      >
        <i
          className={`i-bi-chevron-right inline-block mx-2 transition-transform duration-500 ${
            open ? 'transform rotate-90' : ''
          }`}
        />
        {props.summary}
      </summary>
      <div ref={contentRef} className="p-2">
        <div className="rounded bg-white p-2">{props.children}</div>
      </div>
    </details>
  );
};

export default Collapse;
