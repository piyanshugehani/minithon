import { useRef } from 'react';
import User from './User';
import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';
import Leaderboard from './LeaderBoard';

function Lead() {
  // Create refs for the container and two points for the animated beam
  const containerRef = useRef(null);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <Navbar />
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-2xl">Minithon</h1>
          <div className='flex justify-around'>
            <ThemeToggle />
            <User />
          </div>
        </header>
        <main className="p-4" ref={containerRef}>
          
      <div className="ml-0 mr-0 md:ml-[15%] md:mr-[2%] lg:ml-[15%] lg:mr-[2%]">
      <Leaderboard/>
      </div>
        </main>
      </div>
    </>
  );
}

export default Lead;
