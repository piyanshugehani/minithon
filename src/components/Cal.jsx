import React, { useRef } from "react";
import CalendarComponent from "./Calendar";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import User from "./User";

function Cal() {
  const containerRef = useRef(null);
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <Navbar />
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl">Minithon</h1>
        {/* <div className="flex justify-around">
          <ThemeToggle />
          <User />
        </div> */}
      </header>
      <main className="p-4" ref={containerRef}>
        <div className="ml-0 mr-0 md:ml-[15%] md:mr-[2%] lg:ml-[15%] lg:mr-[2%] h-[100vh]">
          <CalendarComponent />
        </div>
      </main>
    </div>
  );
}

export default Cal;
