import { useState } from "react";

interface TodoInterface {
  id: number;
  task: string;
}

const Todo01 = () => {
  const [inputData, setInputData] = useState<string>("");

  const [todoData, setTodoData] = useState<TodoInterface[]>([]);

  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  const [editedText, setEditedText] = useState<string>("");
  const timeId = new Date().getTime();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputData.trim() === "") return;
    const newTodo: TodoInterface = {
      id: timeId,
      task: inputData.trim(),
    };
    setTodoData([...todoData, newTodo]);
    setInputData("");
  };

  const handleDelete = (id: number) => {
    const updatedTodo = todoData.filter((item) => item.id !== id);
    setTodoData(updatedTodo);
  };

  const handleEdit = (id: number) => {
    setEditTodoId(id);
    const todoToEdit = todoData.find((item) => item.id === id);
    if (todoToEdit) {
      setEditedText(todoToEdit.task);
    }
  };

  const handleEditTextToSave = () => {
    if (editedText.trim() === "") return;
    const updatedTodos = todoData.map((item) =>
      item.id === editTodoId ? { ...item, task: editedText.trim() } : item
    );
    setTodoData(updatedTodos);
    setEditTodoId(null);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-4">
        <input
          type="text"
          className="focus:outline-none border"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button type="submit" className="bg-purple-500 px-4 text-white text-xl">
          +
        </button>
      </form>
      <ul>
        {todoData.map((item) => (
          <li key={item.id}>
            {editTodoId === item.id ? (
              <>
                <input
                  type="text"
                  className="focus:outline-none border"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button
                  onClick={handleEditTextToSave}
                  className="bg-purple-500 px-4 text-white text-xl">
                  +
                </button>
              </>
            ) : (
              <>
                {item.task}
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(item.id)}>
                  delete
                </button>
                <button
                  className="text-green-500"
                  onClick={() => handleEdit(item.id)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo01;
