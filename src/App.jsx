// App.jsx
import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import User from './components/User';
import ThemeToggle from './components/ThemeToggle';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import MapComponent from './components/MapComponent'; // Import the MapComponent

function App() {
  const [startLocation, setStartLocation] = useState({ lat: '', lng: '' });
  const [endLocation, setEndLocation] = useState({ lat: '', lng: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add any additional logic here if needed
  };

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
        <main className="p-4">
          <div className="ml-0 mr-0 md:ml-[15%] md:mr-[2%] lg:ml-[15%] lg:mr-[2%]">
            <Dashboard />

            {/* Add Location Inputs */}
            {/* <form onSubmit={handleSubmit} className="mb-4">
              <input
                type="text"
                placeholder="Start Location (lat,lng)"
                value={`${startLocation.lat},${startLocation.lng}`}
                onChange={(e) => {
                  const [lat, lng] = e.target.value.split(',').map(Number);
                  setStartLocation({ lat, lng });
                }}
                className="mr-2 border rounded p-1"
              />
              <input
                type="text"
                placeholder="End Location (lat,lng)"
                value={`${endLocation.lat},${endLocation.lng}`}
                onChange={(e) => {
                  const [lat, lng] = e.target.value.split(',').map(Number);
                  setEndLocation({ lat, lng });
                }}
                className="mr-2 border rounded p-1"
              />
              <button type="submit" className="border rounded p-1 bg-blue-500 text-white">
                Show Route
              </button>
            </form>

            {/* Render the Map */}
            {/* <MapComponent startLocation={startLocation} endLocation={endLocation} /> */}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
