import "react";
import "./App.css";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: Props) {
  const [todoValue, setTodoValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoValue("");
  };

  return (
    <div className="App">
      {/* Clicked: {value} times */}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
