import React, { useRef } from "react";
import CalendarComponent from "./Calendar";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import User from "./User";

function Cal() {
  localStorage.setItem('theme', 'light');
  return (
        <div className="h-[100vh]">
          <CalendarComponent />
        </div>
  );
}

export default Cal;
