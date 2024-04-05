// import { FormEvent, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToTask,
//   removeTask,
//   editTodoText,
//   updateTask,
// } from "../redux/todoSlice";

// const TodoReduxCrud = () => {
//   const [inputText, setInputText] = useState<string>("");
//   const dispatch = useDispatch();
//   const todoTaskData = useSelector((state) => state.todos.todoTasks);
//   const editTaskId = useSelector((state) => state.todos.editTaskId);
//   const updatedTaskText = useSelector((state) => state.todos.updateTaskText);

//   const handleSubmit = (e: FormEvent<HTMLElement>) => {
//     e.preventDefault();
//     if (inputText.trim() === "") return;
//     dispatch(addToTask(inputText.trim()));
//     setInputText("");
//   };

//   const handleDelete = (id: number) => {
//     dispatch(removeTask(id));
//   };

//   const handleEditTask = (id: number) => {
//     dispatch(editTodoText(id));
//   };

//   const handleUpdateTask = () => {
//     dispatch(updateTask(updatedTaskText));
//   };

//   return (
//     <div className="flex justify-center items-center my-20 flex-col gap-4">
//       <h1>Todo App</h1>
//       <form onSubmit={handleSubmit} className="flex gap-4">
//         <input
//           type="text"
//           className="focus:outline-none border p-1"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 font-semibold text-white  p-1  px-4">
//           +
//         </button>
//       </form>

//       <div>
//         <ul className="flex flex-col gap-4">
//           {todoTaskData.map((item) => (
//             <>
//               <div key={item.id} className="flex gap-4">
//                 <li>{item.task}</li>
//                 <button
//                   onClick={() => handleEditTask(item.id)}
//                   className="bg-green-500 font-semibold text-white  p-1  px-4">
//                   edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(item.id)}
//                   className="bg-red-500 font-semibold text-white  p-1  px-4">
//                   delete
//                 </button>
//               </div>

//               <div>
//                 {editTaskId === item.id && (
//                   <form
//                     key={item.id}
//                     onSubmit={handleUpdateTask}
//                     className="flex gap-4">
//                     <input
//                       type="text"
//                       className="focus:outline-none border p-1"
//                       value={updatedTaskText}
//                       onChange={(e) => setUpdatedTaskText(e.target.value)}
//                     />
//                     <button
//                       type="submit"
//                       className="bg-blue-500 font-semibold text-white  p-1  px-4">
//                       +
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </>
//           ))}
//         </ul>
//       </div>

//       <div></div>
//     </div>
//   );
// };

// export default TodoReduxCrud;
