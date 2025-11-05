// import React, { useState } from "react";

// function ToDoList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");


//   function handleInputChange(e) {
//     setNewTask(e.target.value);
//   }

//   function addTask() {
//     if (newTask.trim() !== "") {
//       setTasks((t) => [...t, newTask]);
//       setNewTask("");
//     }
//   }

//   function deleteTask(i) {
//     const updatedTasks = tasks.filter((_, index) => index !== i);
//     setTasks(updatedTasks);
//   }



//   function moveTaskUp(i) {
//     if(i > 0){
//         const updatedTasks = [...tasks];
//         [updatedTasks[i], updatedTasks[i -1]] = [updatedTasks[i-1],updatedTasks[i]];
//         setTasks(updatedTasks);
//     }
//   }

//   function moveTaskDown(i) {
//       if(i < tasks.length - 1){
//         const updatedTasks = [...tasks];
//         [updatedTasks[i], updatedTasks[i +1]] = [updatedTasks[i+1],updatedTasks[i]];
//         setTasks(updatedTasks);
//     }
//   }

//  function Affirmations() {
//   const [quote, setQuote] = useState({
//     text: "I can do all things through Christ who strengthens me!",
//     author: "Philippians 4:13",
//   });
  

//   return (
//     <div className="to-do-list">
//       <h1>To Do List</h1>

//           <div className="affirmation-container">
//         <div className="quote">{quote.text}</div>
//         <div className="bottom">
//           <div className="author">{quote.author}</div>
//            {/* <div className="icons" onClick={generateNewQuote}>
          
//           </div>  */}
//            <button>I've got this!</button>
//         </div>
//       </div>

//       <div>
//         <input
//           type="text"
//           placeholder="New Task?"
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button className="add-button" onClick={addTask}>
//           ➕
//         </button>
//       </div>

//       <ol>
//         {tasks.map((task, i) => (
//           <li key={i}>
//             <span className="text">{task}</span>

//             <button className="move-button" onClick={() => moveTaskUp(i)}>
//               ⤴️
//             </button>
//             <button className="delete-button" onClick={() => deleteTask(i)}>
//               ❌
//             </button>
//             <button className="move-button" onClick={() => moveTaskDown(i)}>
//               ⤵️
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }
// export default ToDoList;
// export default Affirmations;


// import React, { useState } from "react";

// function ToDoList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   function handleInputChange(e) {
//     setNewTask(e.target.value);
//   }

//   function addTask() {
//     if (newTask.trim() !== "") {
//       setTasks((t) => [...t, newTask]);
//       setNewTask("");
//     }
//   }

//   function deleteTask(i) {
//     const updatedTasks = tasks.filter((_, index) => index !== i);
//     setTasks(updatedTasks);
//   }

//   function moveTaskUp(i) {
//     if (i > 0) {
//       const updatedTasks = [...tasks];
//       [updatedTasks[i], updatedTasks[i - 1]] = [updatedTasks[i - 1], updatedTasks[i]];
//       setTasks(updatedTasks);
//     }
//   }

//   function moveTaskDown(i) {
//     if (i < tasks.length - 1) {
//       const updatedTasks = [...tasks];
//       [updatedTasks[i], updatedTasks[i + 1]] = [updatedTasks[i + 1], updatedTasks[i]];
//       setTasks(updatedTasks);
//     }
//   }

//   // 🌸 Affirmation section
//   const [quote, setQuote] = useState({
//     text: "I can do all things through Christ who strengthens me!",
//     author: "Philippians 4:13",
//   });

//   return (
//     <div className="to-do-list">
//       <h1>To Do List</h1>

//       {/* Affirmation section */}
//       <div className="affirmation-container">
//         <div className="quote">{quote.text}</div>
//         <div className="bottom">
//           <div className="author">{quote.author}</div>
//           <button>I've got this!</button>
//         </div>
//       </div>

//       {/* Input and tasks */}
//       <div>
//         <input
//           type="text"
//           placeholder="New Task?"
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button className="add-button" onClick={addTask}>
//           ➕
//         </button>
//       </div>

//       <ol>
//         {tasks.map((task, i) => (
//           <li key={i}>
//             <span className="text">{task}</span>

//             <button className="move-button" onClick={() => moveTaskUp(i)}>
//               ⤴️
//             </button>
//             <button className="delete-button" onClick={() => deleteTask(i)}>
//               ❌
//             </button>
//             <button className="move-button" onClick={() => moveTaskDown(i)}>
//               ⤵️
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default ToDoList;


import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

 const affirmations = [
  {
    text: "I can do all things through Christ who strengthens me.",
    author: "Philippians 4:13",
  },
  {
    text: "The Lord is my strength and my shield; my heart trusts in Him.",
    author: "Psalm 28:7",
  },
  {
    text: "Fear not, for I am with you; be not dismayed, for I am your God.",
    author: "Isaiah 41:10",
  },
  {
    text: "The joy of the Lord is my strength.",
    author: "Nehemiah 8:10",
  },
  {
    text: "When I am weak, then I am strong.",
    author: "2 Corinthians 12:10",
  },
  {
    text: "The Lord will fight for you; you need only to be still.",
    author: "Exodus 14:14",
  },
  {
    text: "Be strong and courageous. The Lord your God goes with you.",
    author: "Deuteronomy 31:6",
  },
  {
    text: "He gives power to the weak and strength to the powerless.",
    author: "Isaiah 40:29",
  },
  {
    text: "My grace is sufficient for you, for My power is made perfect in weakness.",
    author: "2 Corinthians 12:9",
  },
  {
    text: "The Lord is my light and my salvation—whom shall I fear?",
    author: "Psalm 27:1",
  },
];


  // const [quote, setQuote] = useState({
  //   text: "I can do all things through Christ who strengthens me!",
  //   author: "Philippians 4:13",
  // });

  const [quote, setQuote] = useState(affirmations[0]);

function generateNewQuote() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  setQuote(affirmations[randomIndex]);
}


  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(i) {
    const updatedTasks = tasks.filter((_, index) => index !== i);
    setTasks(updatedTasks);
  }

  function moveTaskUp(i) {
    if (i > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i - 1]] = [updatedTasks[i - 1], updatedTasks[i]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(i) {
    if (i < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i + 1]] = [updatedTasks[i + 1], updatedTasks[i]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>She Plans, God Leads👫</h1>

      <div className="affirmation-container">
        <div className="quote">{quote.text}</div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <button className="btn" onClick={generateNewQuote}>I've got this!</button>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Add a little goal 💕"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          ➕
        </button>
      </div>

      <ol>
        {tasks.map((task, i) => (
          <li key={i}>
            <span className="text">{task}</span>
            <button className="move-button" onClick={() => moveTaskUp(i)}>⤴️</button>
            <button className="delete-button" onClick={() => deleteTask(i)}>❌</button>
            <button className="move-button" onClick={() => moveTaskDown(i)}>⤵️</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
