import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색기능
  const getFilteredData = () => {
    // 만약 검색창이 비어있으면 기존에 있는 todo list를 모두 보여주기
    if (search === "") {
      return todos;
    }
    // 그게 아니면 todo list에 있는 todo들을 쭉 돌면서 todo의 내용을 모두 소문자로 만든 뒤에 내가 검색한 내용을 포함하고 있다면 필터링해서 보여줘
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 검색으로 필터된 데이터만 가지고 있는 변수
  const filteredTodos = getFilteredData();

  return (
    <>
      <div className="List">
        <h4>Todo List🌱</h4>
        <input
          value={search}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요"
        />
        <div className="todos_wrapper">
          {filteredTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
