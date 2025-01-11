import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

// 임의 데이터 생성
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "github 관리하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "코딩테스트 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // Create: todo 추가함수
  const onCreate = (content) => {
    const newTodo = {
      // 객체로 변환
      id: idRef.current++, // id는 현재id보다 1씩 커져야하므로
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // Update: todo 추가하고 todolist를 업데이트
    setTodos([newTodo, ...todos]); // 기존에 있던거에 새로운 newtodo를 추가하는 것이므로 ...todos로 가져와야한다
  };

  // Update: todo 수정 함수
  const onUpdate = (targetId) => {
    // checkbox 변경 : todos state의 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // Delete: todo 삭제 함수
  // 삭제함수는 삭제버튼을 누르지 않은 todo들을 가지고 다시 배열을 만드는 것
  // 그래서 update의 setTodos를 활용하는 것
  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
