import { useState, useEffect } from "react";

export const LocalStorage = () => {
  const [storage, setStorage] = useState("");

  useEffect(() => {
    // Save something into localStorage
    localStorage.setItem("lastname", "Smith");

    // Read from localStorage
    const storedHabits = localStorage.getItem("lastname");
    if (storedHabits) {
      setStorage(storedHabits); // set state AFTER render using useEffect
    }
  }, []); // runs only once when component mounts

  return (
    <>
      <p>{storage}</p>
    </>
  );
};
