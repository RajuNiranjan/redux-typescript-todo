import { FormEvent, useState } from "react";

interface TodoTaskInterface {
  id: number;
  task: string;
}

const TodoCRUD = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todoTaskData, setTodoTaskData] = useState<TodoTaskInterface[]>([]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [updatedTaskText, setUpdatedTaskText] = useState<string>("");

  const time = new Date().getTime();

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    const newTodoTaskData: TodoTaskInterface = {
      id: time,
      task: inputText.trim(),
    };
    setTodoTaskData([...todoTaskData, newTodoTaskData]);
    setInputText("");
  };

  const handleDelete = (id: number) => {
    const deleteTask = todoTaskData.filter((item) => item.id !== id);
    setTodoTaskData(deleteTask);
  };

  const handleEditTask = (id: number) => {
    setEditTaskId(id);
    const taskToEdit = todoTaskData.find((item) => item.id === id);
    if (taskToEdit) {
      setUpdatedTaskText(taskToEdit.task);
    }
  };

  const handleUpdateTask = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (updatedTaskText.trim() === "") return;
    const updatedNewTask = todoTaskData.map((item) =>
      item.id === editTaskId ? { ...item, task: updatedTaskText.trim() } : item
    );
    setTodoTaskData(updatedNewTask);
    setEditTaskId(null);
  };

  return (
    <div className="flex justify-center items-center my-20 flex-col gap-4">
      <h1>Task Maneger</h1>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          className="focus:outline-none border p-1"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 font-semibold text-white  p-1  px-4">
          +
        </button>
      </form>

      <div>
        <ul className="flex flex-col gap-4">
          {todoTaskData.map((item) => (
            <>
              <div key={item.id} className="flex gap-4">
                <li>{item.task}</li>
                <button
                  onClick={() => handleEditTask(item.id)}
                  className="bg-green-500 font-semibold text-white  p-1  px-4">
                  edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 font-semibold text-white  p-1  px-4">
                  delete
                </button>
              </div>

              <div>
                {editTaskId === item.id && (
                  <form
                    key={item.id}
                    onSubmit={handleUpdateTask}
                    className="flex gap-4">
                    <input
                      type="text"
                      className="focus:outline-none border p-1"
                      value={updatedTaskText}
                      onChange={(e) => setUpdatedTaskText(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 font-semibold text-white  p-1  px-4">
                      +
                    </button>
                  </form>
                )}
              </div>
            </>
          ))}
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default TodoCRUD;
