import { useState } from "react";

export const Habit = () => {
  const [habit, setHabit] = useState({
    habitName: '',
    habitPerday: 0,
    habitInfo: ''
  });

  const [savedHabits, setSavedHabits] = useState([]);
  const [habitCounter, setHabitCounter] = useState(0);

  // handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHabit((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.habitName.trim() === "") return;

    // Add done: false when saving new habit
    setSavedHabits((prev) => [...prev, { ...habit, done: false }]);
    setHabitCounter((prev) => prev + 1);
    setHabit({ habitName: '', habitPerday: 0, habitInfo: '' });
  };

  // Toggle done status when checkbox changes
  const toggleDone = (index) => {
    setSavedHabits((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <>
      <div>
        <h2>Habit List</h2>
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
          placeholder="Per day"
          value={habit.habitPerday}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="habitInfo"
          placeholder="Info"
          value={habit.habitInfo}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div>
        <h2>Habit Counter</h2>
        <h2>{habitCounter}</h2>
      </div>

      {/* Active Habits */}
      <div>
        <h2>Active Habits</h2>
        <ul>
          {savedHabits.filter(h => !h.done).map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{item.habitName}</strong> - {item.habitPerday} time(s) per day<br/>
              {item.habitInfo}<br/>
              <label>
                Done? 
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleDone(index)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Done Habits */}
      <div>
        <h2>Done Habits</h2>
        <ul>
          {savedHabits.filter(h => h.done).map((item, index) => (
            <li key={index} style={{ marginBottom: "10px", textDecoration: 'line-through', color: 'gray' }}>
              <strong>{item.habitName}</strong> - {item.habitPerday} time(s) per day<br/>
              {item.habitInfo}<br/>
              <label>
                Done? 
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleDone(index)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
