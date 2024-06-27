// import React, { useState } from "react";
// import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

// const TodoList = () => {
//   const [tasks, setTasks] = useState([
//     { text: "Task1", due: "Due on 1/1/23", completed: false },
//     { text: "Task2", due: "Due on 8/1/23", completed: false },
//     { text: "Task3", due: "Due on 15/1/23", completed: false },
//   ]);
//   const [newTask, setNewTask] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editText, setEditText] = useState("");

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([
//         ...tasks,
//         { text: newTask, due: "No due date", completed: false },
//       ]);
//       setNewTask("");
//     }
//   };

//   const toggleTaskCompletion = (index) => {
//     const updatedTasks = tasks.map((task, idx) => {
//       if (idx === index) {
//         return { ...task, completed: !task.completed };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   };

//   const startEditTask = (index) => {
//     setEditIndex(index);
//     setEditText(tasks[index].text);
//   };

//   const saveEditTask = () => {
//     const updatedTasks = tasks.map((task, idx) => {
//       if (idx === editIndex) {
//         return { ...task, text: editText };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//     setEditIndex(null);
//     setEditText("");
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, idx) => idx !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
//       <div className="px-4 py-2">
//         <h1 className="text-gray-800 font-bold text-2xl uppercase">
//           Monthly Targets
//         </h1>
//       </div>
//       <form
//         className="w-full max-w-sm mx-auto px-4 py-2"
//         onSubmit={(e) => {
//           e.preventDefault();
//           addTask();
//         }}
//       >
//         <div className="flex items-center border-b-2 border-teal-500 py-2">
//           <input
//             className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//             type="text"
//             placeholder="Add a task"
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//           />
//           <button
//             className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
//             type="button"
//             onClick={addTask}
//           >
//             Add
//           </button>
//         </div>
//       </form>
//       <ul className="divide-y divide-gray-200 px-4">
//         {tasks.map((task, index) => (
//           <li key={index} className="py-4 flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id={`todo${index}`}
//                 name={`todo${index}`}
//                 type="checkbox"
//                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                 checked={task.completed}
//                 onChange={() => toggleTaskCompletion(index)}
//               />
//               {editIndex === index ? (
//                 <input
//                   className="ml-3 block text-gray-900"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//               ) : (
//                 <label
//                   htmlFor={`todo${index}`}
//                   className="ml-3 block text-gray-900"
//                 >
//                   <span
//                     className={`text-lg font-medium ${
//                       task.completed ? "line-through" : ""
//                     }`}
//                   >
//                     {task.text}
//                   </span>
//                   <span className="text-sm font-light text-gray-500">
//                     {" "}
//                     {task.due}
//                   </span>
//                 </label>
//               )}
//             </div>
//             <div className="flex items-center space-x-2">
//               {editIndex === index ? (
//                 <button
//                   className="text-green-500 hover:text-green-700"
//                   onClick={saveEditTask}
//                 >
//                   Save
//                 </button>
//               ) : (
//                 <PencilIcon
//                   className="h-5 w-5 text-blue-500 hover:text-blue-700 cursor-pointer"
//                   onClick={() => startEditTask(index)}
//                 />
//               )}
//               <TrashIcon
//                 className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer"
//                 onClick={() => deleteTask(index)}
//               />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
// import React, { useState } from "react";
// import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

// const TodoList = () => {
//   const [tasks, setTasks] = useState([
//     {
//       text: "Task1",
//       due: "Due on 1/1/23",
//       completed: false,
//       details: "Details for Task1",
//     },
//     {
//       text: "Task2",
//       due: "Due on 8/1/23",
//       completed: false,
//       details: "Details for Task2",
//     },
//     {
//       text: "Task3",
//       due: "Due on 15/1/23",
//       completed: false,
//       details: "Details for Task3",
//     },
//   ]);
//   const [newTask, setNewTask] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editText, setEditText] = useState("");
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([
//         ...tasks,
//         {
//           text: newTask,
//           due: "No due date",
//           completed: false,
//           details: "No details",
//         },
//       ]);
//       setNewTask("");
//     }
//   };

//   const toggleTaskCompletion = (index) => {
//     const updatedTasks = tasks.map((task, idx) => {
//       if (idx === index) {
//         return { ...task, completed: !task.completed };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   };

//   const startEditTask = (index) => {
//     setEditIndex(index);
//     setEditText(tasks[index].text);
//   };

//   const saveEditTask = () => {
//     const updatedTasks = tasks.map((task, idx) => {
//       if (idx === editIndex) {
//         return { ...task, text: editText };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//     setEditIndex(null);
//     setEditText("");
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, idx) => idx !== index);
//     setTasks(updatedTasks);
//   };

//   const toggleAccordion = (index) => {
//     setOpenAccordion(openAccordion === index ? null : index);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
//       <div className="px-4 py-2">
//         <h1 className="text-gray-800 font-bold text-2xl uppercase">
//           Monthly Targets
//         </h1>
//       </div>
//       <form
//         className="w-full max-w-sm mx-auto px-4 py-2"
//         onSubmit={(e) => {
//           e.preventDefault();
//           addTask();
//         }}
//       >
//         <div className="flex items-center border-b-2 border-teal-500 py-2">
//           <input
//             className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//             type="text"
//             placeholder="Add a task"
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//           />
//           <button
//             className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
//             type="button"
//             onClick={addTask}
//           >
//             Add
//           </button>
//         </div>
//       </form>
//       <ul className="divide-y divide-gray-200 px-4">
//         {tasks.map((task, index) => (
//           <li key={index} className="py-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id={`todo${index}`}
//                   name={`todo${index}`}
//                   type="checkbox"
//                   className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                   checked={task.completed}
//                   onChange={() => toggleTaskCompletion(index)}
//                 />
//                 {editIndex === index ? (
//                   <input
//                     className="ml-3 block text-gray-900"
//                     value={editText}
//                     onChange={(e) => setEditText(e.target.value)}
//                   />
//                 ) : (
//                   <label
//                     htmlFor={`todo${index}`}
//                     className="ml-3 block text-gray-900 cursor-pointer"
//                     onClick={() => toggleAccordion(index)}
//                   >
//                     <span
//                       className={`text-lg font-medium ${
//                         task.completed ? "line-through" : ""
//                       }`}
//                     >
//                       {task.text}
//                     </span>
//                     <span className="text-sm font-light text-gray-500">
//                       {" "}
//                       {task.due}
//                     </span>
//                   </label>
//                 )}
//               </div>
//               <div className="flex items-center space-x-2">
//                 {editIndex === index ? (
//                   <button
//                     className="text-green-500 hover:text-green-700"
//                     onClick={saveEditTask}
//                   >
//                     Save
//                   </button>
//                 ) : (
//                   <PencilIcon
//                     className="h-5 w-5 text-blue-500 hover:text-blue-700 cursor-pointer"
//                     onClick={() => startEditTask(index)}
//                   />
//                 )}
//                 <TrashIcon
//                   className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer"
//                   onClick={() => deleteTask(index)}
//                 />
//               </div>
//             </div>
//             {openAccordion === index && (
//               <div className="mt-2 pl-10 pr-4">
//                 <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
//                   {task.details}
//                 </div>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
import React, { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      text: "Day1",
      due: "Due on 1/1/23",
      completed: false,
      details: "Details for Task1",
    },
    {
      text: "Day2",
      due: "Due on 8/1/23",
      completed: false,
      details: "Details for Task2",
    },
    {
      text: "Day3",
      due: "Due on 15/1/23",
      completed: false,
      details: "Details for Task3",
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDetailsIndex, setEditDetailsIndex] = useState(null);
  const [editDetailsText, setEditDetailsText] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          text: newTask,
          due: "No due date",
          completed: false,
          details: "No details",
        },
      ]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const startEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEditTask = () => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === editIndex) {
        return { ...task, text: editText };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText("");
  };

  const startEditDetails = (index) => {
    setEditDetailsIndex(index);
    setEditDetailsText(tasks[index].details);
  };

  const saveEditDetails = () => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === editDetailsIndex) {
        return { ...task, details: editDetailsText };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditDetailsIndex(null);
    setEditDetailsText("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">
          Monthly Targets
        </h1>
      </div>
      <form
        className="w-full max-w-sm mx-auto px-4 py-2"
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </form>
      <ul className="divide-y divide-gray-200 px-4">
        {tasks.map((task, index) => (
          <li key={index} className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id={`todo${index}`}
                  name={`todo${index}`}
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                {editIndex === index ? (
                  <input
                    className="ml-3 block text-gray-900"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <label
                    htmlFor={`todo${index}`}
                    className="ml-3 block text-gray-900 cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span
                      className={`text-lg font-medium ${
                        task.completed ? "line-through" : ""
                      }`}
                    >
                      {task.text}
                    </span>
                    <span className="text-sm font-light text-gray-500">
                      {" "}
                      {task.due}
                    </span>
                  </label>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {editIndex === index ? (
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={saveEditTask}
                  >
                    Save
                  </button>
                ) : (
                  <PencilIcon
                    className="h-5 w-5 text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => startEditTask(index)}
                  />
                )}
                <TrashIcon
                  className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => deleteTask(index)}
                />
              </div>
            </div>
            {openAccordion === index && (
              <div className="mt-2 pl-10 pr-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                  {editDetailsIndex === index ? (
                    <div>
                      <textarea
                        className="w-full p-2 border rounded"
                        value={editDetailsText}
                        onChange={(e) => setEditDetailsText(e.target.value)}
                      />
                      <button
                        className="mt-2 bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded"
                        onClick={saveEditDetails}
                      >
                        Save Details
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p>{task.details}</p>
                      <button
                        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                        onClick={() => startEditDetails(index)}
                      >
                        Edit Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
