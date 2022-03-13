import { useState, useRef } from "react";

function App() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [todosList, setTodosList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null)

  function handleChange(event: any) {
    setNewTodoValue(event.target.value);
  }

  function addTodo(event: any) {
    event.preventDefault();
    setTodosList((prevTodosList) => [...prevTodosList, newTodoValue]);
    setNewTodoValue("");
    if(inputRef && inputRef.current) inputRef.current.focus()
  }

  const allTodos = todosList.map((todo) => <p key={todo}>{todo}</p>);

  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type="text"
          name="todo"
          value={newTodoValue}
          onChange={handleChange}
        />
        <button onClick={addTodo}>Add todo item</button>
      </form>
      {allTodos}
    </div>
  );
}
export default App;
