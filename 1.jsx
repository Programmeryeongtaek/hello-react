import { useState } from 'react';
import CollapsePractice from './Collapse';
import CollapseAnswer from './Collapse.answer';

function App() {
  const [isAnswerMode, setIsAnswerMode] = useState(true);

  const Collapse = isAnswerMode ? CollapseAnswer : CollapsePractice;

  return (
    <div className="flex flex-col my-4 gap-2 items-stretch">
      <label className="flex gap-2 justify-center">
        <input
          type="checkbox"
          checked={isAnswerMode}
          onChange={(e) => {
            setIsAnswerMode(e.target.checked);
          }}
        />
        정답 확인 모드
      </label>
      <Collapse summary="자세히 보기">안녕하세요</Collapse>
      <Collapse summary="자세히 보기 2" open>
        기본적으로 열려 있습니다
      </Collapse>
    </div>
  );
}

export default App;
