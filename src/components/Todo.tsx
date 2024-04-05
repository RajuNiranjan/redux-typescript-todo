import { FormEvent, useState } from "react";

interface TodoInterface {
  id: number;
  text: string;
}

const Todo = () => {
  const [input, setInput] = useState("");

  const [todo, setTodo] = useState<TodoInterface[]>([]);

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const newTodo: TodoInterface = {
      id: todo.length + 1,
      text: input.trim(),
    };
    setTodo([...todo, newTodo]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    const updateTodo = todo.filter((item) => item.id !== id);
    setTodo(updateTodo);
  };

  return (
    <div className="flex justify-center items-center my-10 flex-col gap-5">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-4">
        <input
          type="text"
          name="todo"
          id="todo"
          className="focus:outline-none border"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded-md">
          Add
        </button>
      </form>
      <div>
        <ul>
          {todo.map((item) => (
            <li key={item.id}>
              {item.text}{" "}
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-4 rounded-md">
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
