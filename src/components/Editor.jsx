import "./Editor.css";
import { useState, useRef } from "react";

// Create: todo 추가
const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    // 빈 todo를 제출하려고 하면 focus만 되고 제출되지 않도록 함
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    // todo에 뭔가가 적혀있다면 todo 생성 후 작성 칸 비우기
    onCreate(content);
    setContent("");
  };

  // 엔터쳐도 todo가 생성되도록
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      // e.keyCode 13번이 submit기능
      onSubmit();
    }
  };
  return (
    <>
      <div className="Editor">
        <input
          ref={contentRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeydown}
          placeholder="새로운 todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </>
  );
};

export default Editor;
