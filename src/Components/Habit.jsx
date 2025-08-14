// import { useState } from "react";

// export const Habit = () => {
//   const [habit, setHabit] = useState({
//     habitName: "",
//     habitPerday: 0,
//     habitInfo: "",
//   });

//   const [savedHabits, setSavedHabits] = useState([]);
//   const [habitCounter, setHabitCounter] = useState({
//     activeHabit: 0,
//     doneHabit:0,
//   });

//   // handle input changes in the form
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setHabit((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // submit new habit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (habit.habitName.trim() === "") return;

//     // add done property for checkbox state, default false
//     const newHabit = { ...habit, done: false };
//     setSavedHabits((prev) => [...prev, newHabit]);
//     setHabitCounter((prev) => ({ activeHabit: prev.activeHabit + 1}));

//     setHabit({ habitName: "", habitPerday: 0, habitInfo: "" });
//   };

//   // toggle habit done/undone
//   const toggleDone = (index) => {
//     setSavedHabits((prev) => {
//       const updated = prev.map((item, i) =>
//         i === index ? { ...item, done: !item.done } : item
//       );

//       // adjust counters based on new status
//       const wasDone = prev[index].done;
//       setHabitCounter((prevCount) => ({
//         activeHabit: prevCount.activeHabit + (wasDone ? -1 : 1),
//         doneHabit: prevCount.doneHabit + (wasDone ? 1 : -1),
//       }));

//       return updated;
//     });
//   };

// //   const deletHabit = (indexToRemove) =>  {
// //     setSavedHabits((prev) => prev.filter((_, index) => index !== indexToRemove));
// //     const wasDone = prev[indexToRemove].done;
// //     setHabitCounter((prevCount) => ({
// //         activeHabit: prevCount.activeHabit + (wasDone ? -1 : 1),
// //         doneHabit: prevCount.doneHabit + (wasDone ? 1 : -1),
// //     }));
// //   }

// const deleteHabit = (indexToRemove) => {
//     setSavedHabits((prev) => {
//       const habitToDelete = prev[indexToRemove];
//       const isDone = habitToDelete.done;

//       setHabitCounter((prevCount) => ({
//         activeHabit: isDone
//           ? prevCount.activeHabit
//           : prevCount.activeHabit - 1,
//         doneHabit: isDone
//           ? prevCount.doneHabit - 1
//           : prevCount.doneHabit,
//       }));

//       return prev.filter((_, index) => index !== indexToRemove);
//     });
//   };

  
  
//   // handle changing per day count in the active list
//   const updatePerDay = (index, newCount) => {
//     setSavedHabits((prev) =>
//       prev.map((item, i) =>
//         i === index ? { ...item, habitPerday: Number(newCount) } : item
//       )
//     );
//   };

//   return (
//     <>
//       <div>
//         <h2>Add New Habit</h2>
//         <input
//           type="text"
//           name="habitName"
//           placeholder="Habit name"
//           value={habit.habitName}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="habitPerday"
//           placeholder="Per day"
//           value={habit.habitPerday}
//           onChange={handleInputChange}
//           min={0}
//         />
//         <input
//           type="text"
//           name="habitInfo"
//           placeholder="Info"
//           value={habit.habitInfo}
//           onChange={handleInputChange}
//         />
//         <button type="submit" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>

//       <div>
//         <h2>Habit Counter</h2>
//         <h2>Active : {habitCounter.activeHabit}</h2>
//         <h2>Done : {habitCounter.doneHabit}</h2>
//       </div>

//       <div>
//         <h2>Active Habits</h2>
//         <ul>
//           {savedHabits.map((item, index) =>
//             !item.done ? (
//               <li
//                 key={index}
//                 style={{
//                   marginBottom: "10px",
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   borderRadius: "5px",
//                 }}
//               >
//                 <strong>{item.habitName}</strong> <br />
//                 {/* Editable per day count */}
//                 Per day:{" "}
//                 <input
//                   type="number"
//                   value={item.habitPerday}
//                   min={0}
//                   onChange={(e) => updatePerDay(index, e.target.value)}
//                   style={{ width: "50px" }}
//                 />{" "}
//                 times <br />
//                 Info: {item.habitInfo} <br />
//                 <label>
//                   Done?{" "}
//                   <input
//                     type="checkbox"
//                     checked={item.done}
//                     onChange={() => toggleDone(index)}
//                   />
//                 </label>
//                     <button onClick={()=>deleteHabit(index)}> Delete</button>
//               </li>
//             ) : null
//          )}
//         </ul> 
       
      
//       </div>

//       <div>
//         <h2>Done Habits</h2>
//         <ul>
//           {savedHabits.map((item, index) =>
//             item.done ? (
//               <li
//                 key={index}
//                 style={{
//                   marginBottom: "10px",
//                   border: "1px solid green",
//                   padding: "10px",
//                   borderRadius: "5px",
//                   backgroundColor: "#e0ffe0",
//                 }}
//               >
//                 <strong>{item.habitName}</strong> <br />
//                 Per day: {item.habitPerday} times <br />
//                 Info: {item.habitInfo} <br />
//                 <label>
//                   Done?{" "}
//                   <input
//                     type="checkbox"
//                     checked={item.done}
//                     onChange={() => toggleDone(index)}
//                   />
//                 </label>
//                 <button onClick={()=>deleteHabit(index)}> Delete</button>
//               </li>
//             ) : null
//           )}
//         </ul>
//       </div>
//     </>
//   );
// };

import { useState , useEffect} from "react";

export const Habit = () => {
  const [habit, setHabit] = useState({
    habitName: "",
    habitPerday: "",
    habitInfo: "",
  });

  const [savedHabits, setSavedHabits] = useState([]);

  const [flag,setflag]= useState(false)

  // handle form inputs
const handleInputChange = (e) => {
  const { name, value } = e.target;  // Extract the 'name' and 'value' from the input element that triggered the event.

  setHabit((prev) => ({
    ...prev,                      // Copy the previous state object to keep all other properties unchanged.
    [name]:                      // Dynamically set the property whose key is the 'name' of the input field.
      name === "habitPerday" && value !== ""  // Check if the input's name is "habitPerday" and the value is not empty.
        ? Number(value)           // If true, convert the value to a Number type before storing it.
        : value                  // Otherwise, store the value as-is (a string).
  }));
};


  // submit new habit
const handleSubmit = (e) => {
  e.preventDefault(); // Prevents the default form submission behavior (like page reload).

  if (!habit.habitName.trim()) return; // If the habitName is empty or only spaces, do nothing (exit).

  // Create a new habit object with these properties:
  const newHabit = {
    id: Date.now().toString() + Math.random().toString(36).slice(2), // Unique id generated from timestamp + random string
    habitName: habit.habitName.trim(),  // Trimmed habit name (removes leading/trailing spaces)
    habitPerday: habit.habitPerday === "" ? null : Number(habit.habitPerday), 
        // If habitPerday is an empty string, save it as null; otherwise convert it to a Number
    habitInfo: habit.habitInfo,          // Habit info as-is (string)
    done: false,                        // New habit is initially not done
  };

  // Add the new habit to the savedHabits array state
  setSavedHabits((prev) => [...prev, newHabit]);

  // Reset the form inputs to empty strings so user can add another habit
  setHabit({ habitName: "", habitPerday: "", habitInfo: "" });
};


  // toggle done/undone manually
  const toggleDone = (id) => {
    setSavedHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, done: !h.done } : h))
    );
  };

  // delete habit
  const deleteHabit = (id) => {
    setSavedHabits((prev) => prev.filter((h) => h.id !== id));//If true (this is the habit to toggle), it creates a new habit object by spreading all existing properties (...h) but flips the done boolean (done: !h.done).
                                                               // If false (not the habit to toggle), it just returns the original habit h unchanged.
  };

  // update per day
const updatePerDay = (id, newValue) => {
  setSavedHabits((prev) =>
    prev.map((h) => {
      if (h.id !== id) return h; // only update the matching habit

      const per = newValue === "" ? null : Number(newValue);

      return {
        ...h,
        habitPerday: per,
        done: per === 0 ? true : h.done,
      };
    })
  );
};
  // derived counts
  const activeCount = savedHabits.filter((h) => !h.done).length;
  const doneCount = savedHabits.filter((h) => h.done).length;

  // Whenever savedHabits changes, build the list
    const [habitList, setHabitList] = useState([]);
    useEffect(() => {
    const listItems = savedHabits.map((habit) => (
      <li key={habit.id}>{habit.habitName}</li>
    ));
    setHabitList(listItems);
    }, [savedHabits]); // runs every time savedHabits changes

  // update the storage 
  const [storage, setStorage] = useState(()=>JSON.parse(localStorage.getItem("habits"))||[]);
  const btnF= ()  =>{
    setflag(prev=>!prev)
    localStorage.setItem("habits",JSON.stringify(savedHabits));
    const storedHabits = localStorage.getItem("habits");
    if (storedHabits) {
    setStorage(JSON.parse(storedHabits));
    }
    };

  return (
    <>
      <div>
        <h2>Add New Habit</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="habitName"
            placeholder="Habit name"
            value={habit.habitName}
            onChange={handleInputChange}
          />

          <input
            type="number"
            name="habitPerday"
            placeholder="Times/day"
            value={habit.habitPerday}
            onChange={handleInputChange}
            min={0}
          />

          <input
            type="text"
            name="habitInfo"
            placeholder="Info"
            value={habit.habitInfo}
            onChange={handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <h3>Counts</h3>
        <p>Active: {activeCount}</p>
        <p>Done: {doneCount}</p>
      </div>

      <div>
        <h3>Active Habits</h3>
        <ul>
          {savedHabits
            .filter((h) => !h.done)
            .map((h) => (
              <li key={h.id}>
                <strong>{h.habitName}</strong>
                <br />
                  left Per day:{" "}
                  <input
                    type="number"
                    value={h.habitPerday ?? ""}
                    min={0}
                    onChange={(e) => updatePerDay(h.id, e.target.value)}
                  />
                <br />
                <br />{h.habitInfo}<br />
                <label>
                  Done?{" "}
                  <input
                    type="checkbox"
                    checked={h.done}
                    onChange={() => toggleDone(h.id)}
                  />
                </label>
                <button onClick={() => deleteHabit(h.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h3>Done Habits</h3>
        <ul>
          {savedHabits
            .filter((h) => h.done)
            .map((h) => (
              <li key={h.id}>
                <strong>{h.habitName}</strong>
                <br />
                  Per day:{" "}
                  {h.habitPerday === null ? "Not set" : h.habitPerday} <br />
                <br />{h.habitInfo}<br />
                <label>
                  Done?{" "}
                  <input
                    type="checkbox"
                    checked={h.done}
                    onChange={() => toggleDone(h.id)}
                  />
                </label>
                <button onClick={() => deleteHabit(h.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>

    {/* <div>
        <h3>List</h3>
    {savedHabits.map((habit)=>(
    <li key={habit.id}>
    {habit.habitName}
    </li>
    ))}
    </div> */}

    <div>
        <h3>List</h3>
        <ul>{habitList}</ul>
    </div>

    <div>
        <h3>sorage data</h3>
        <button onClick={btnF}>update the storage data</button>
        <ul>{storage.map(data=>(
    <li key={data.id}>{data.habitName}</li>))}</ul>
    </div>
</>
  );
};
