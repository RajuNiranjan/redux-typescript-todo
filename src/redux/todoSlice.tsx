import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoTask {
  id: number;
  task: string;
}

interface TodoState {
  todoTask: TodoTask[];
  editTaskId: number | null;
  updateTaskText: string;
}

const initialState: TodoState = {
  todoTask: [],
  editTaskId: null,
  updateTaskText: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToTask(state, action: PayloadAction<string>) {
      const time = new Date().getTime();
      state.todoTask.push({ id: time, task: action.payload });
    },
    removeTask(state, action: PayloadAction<number>) {
      state.todoTask.filter((item) => item.id !== action.payload);
    },
    editTodoText(state, action: PayloadAction<number>) {
      state.editTaskId === action.payload;
      const taskToEdit = state.todoTask.find(
        (item) => item.id === action.payload
      );
      if (taskToEdit) {
        state.updateTaskText = taskToEdit.task;
      }
    },
    updateTask(state, action: PayloadAction<string>) {
      if (state.updateTaskText.trim() === "") return;
      state.todoTask = state.todoTask.map((item) =>
        item.id === state.editTaskId ? { ...item, task: action.payload } : item
      );
      state.editTaskId = null;
      state.updateTaskText = "";
    },
  },
});

export const { addToTask, removeTask, editTodoText, updateTask } =
  todoSlice.actions;

export default todoSlice.reducer;
