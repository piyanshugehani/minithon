import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Home, Folder, FileText, BarChart, User, NotebookIcon, Atom, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav className="hidden md:flex w-[14%] flex-col justify-between items-center h-screen fixed left-0 bg-white dark:bg-black shadow-lg pt-6 pb-3">
      <a href="/" className="flex space-x-2 items-center">
        <div className="flex flex-col justify-center space-y-[-6px]">
          <div className='flex'>
            {/* Changed the dark mode color for the Atom icon */}
            <span><Atom className='h-6 text-black dark:text-white mr-2' /></span>
            {/* Corrected text color in dark mode */}
            <h1 className="text-xl font-semibold font-pop text-black dark:text-white mb-1 text-center">
              UrbanSync
            </h1>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 tracking-tight font-pop text-center">
            Seamless City Synergy
          </p>
        </div>
      </a>

      <div className="flex flex-col items-center space-y-2 w-[100%] mb-20">
        <div className="w-[85%] text-black dark:text-white py-2 px-4 rounded-lg transition duration-100 hover:bg-gray-300 dark:hover:bg-gray-700 hover:font-semibold">
          <a href="/" className='flex justify-start items-center'>
            <span><Home className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Dashboard</p>
          </a>
        </div>

        <div className="w-[85%] text-black dark:text-white py-2 px-4 rounded-lg transition duration-100 hover:bg-gray-300 dark:hover:bg-gray-700 hover:font-semibold">
          <a href="/tasks" className='flex justify-start items-center'>
            <span><NotebookIcon className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">My Tasks</p>
          </a>
        </div>

        <div className="w-[85%] text-black dark:text-white py-2 px-4 rounded-lg transition duration-100 hover:bg-gray-300 dark:hover:bg-gray-700 hover:font-semibold">
          <a href="/projects" className='flex justify-start items-center'>
            <span><Folder className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Projects</p>
          </a>
        </div>

        <div className="w-[85%] text-black dark:text-white py-2 px-4 rounded-lg transition duration-100 hover:bg-gray-300 dark:hover:bg-gray-700 hover:font-semibold">
          <a href="/resources" className='flex justify-start items-center'>
            <span><FileText className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Resources</p>
          </a>
        </div>

        <div className="w-[85%] text-black dark:text-white py-2 px-4 rounded-lg transition duration-100 hover:bg-gray-300 dark:hover:bg-gray-700 hover:font-semibold">
          <a href="/reports" className='flex justify-start items-center'>
            <span><BarChart className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Reports</p>
          </a>
        </div>
      </div>

      <div className="w-[85%] text-black dark:text-white py-2 px-4 rounded-lg transition duration-100 hover:bg-gray-300 dark:hover:bg-gray-700 hover:font-semibold">
        <a href="/account" className='flex justify-start items-center'>
          <span><User className="h-4 w-4 mr-2" /></span>
          <p className="text-sm font-pop">Account</p>
        </a>
      </div>
    </nav>

<nav className="md:hidden fixed top-0 left-0 w-full bg-white dark:bg-black shadow-lg z-50">
<div className="flex justify-between items-center p-4">
  <a href="/" className="flex items-center space-x-2">
    <Atom className="h-6 text-black dark:text-white" />
    <h1 className="text-xl font-semibold text-black dark:text-white">UrbanSync</h1>
  </a>
  <button onClick={toggleMobileMenu} className="focus:outline-none">
    {isMobileMenuOpen ? <X className="h-6 w-6 text-black dark:text-white" /> : <Menu className="h-6 w-6 text-black dark:text-white" />}
  </button>
</div>

{isMobileMenuOpen && (
  <div className="flex flex-col items-center space-y-4 pb-4">
    <a href="/" className="text-black dark:text-white hover:font-semibold">Dashboard</a>
    <a href="/tasks" className="text-black dark:text-white hover:font-semibold">My Tasks</a>
    <a href="/projects" className="text-black dark:text-white hover:font-semibold">Projects</a>
    <a href="/resources" className="text-black dark:text-white hover:font-semibold">Resources</a>
    <a href="/reports" className="text-black dark:text-white hover:font-semibold">Reports</a>
    <a href="/account" className="text-black dark:text-white hover:font-semibold">Account</a>
  </div>
)}
</nav>
</>

    
  );
};

export default Navbar;
