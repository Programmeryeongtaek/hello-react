import { useState, useEffect, useRef } from 'react';

const Collapse = (props) => {
  const [open, setOpen] = useState(props.open ?? false);
  const detailsRef = useRef(null);
  const summaryRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    detailsRef.current.open = open;
    const summaryHeight = summaryRef.current.scrollHeight;
    const contentHeight = contentRef.current.scrollHeight;
    const expandedHeight = summaryHeight + contentHeight;
    detailsRef.current.style.height = `${
      open ? expandedHeight : summaryHeight
    }px`;
  }, []);

  const toggle = (e) => {
    e.preventDefault();

    if (detailsRef.current.open) {
      setOpen(false);
      const summaryHeight = summaryRef.current.scrollHeight;
      const collapsedHeight = summaryHeight;
      detailsRef.current.style.height = `${collapsedHeight}px`;
      detailsRef.current.addEventListener(
        'transitionend',
        () => {
          detailsRef.current.open = false;
        },
        { once: true }
      );
    } else {
      setOpen(true);
      detailsRef.current.open = true;
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
