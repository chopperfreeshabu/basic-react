import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [current, setCurrent] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const handleAdd = () => {
    if (current.trim() == "") {
      setCurrent("");
      return;
    }

    setTodos([...todos, current]);
    setCurrent("");
  };

  return (
    <div>
      <h2>My To Do List</h2>
      <input
        type="text"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div className="list-container">
        <ul className="todo-ul">
          {todos.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
      {/* <p>You Typing: {current}</p> */}
    </div>
  );
}

export default TodoList;
