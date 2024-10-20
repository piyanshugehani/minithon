import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button onClick={toggleTheme} className="p-2 border rounded">
      Toggle to {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
