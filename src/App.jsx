import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'
import ThemeToggle from './components/ThemeToggle'
import { Button } from "@/components/ui/button"
function App() {

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl">Minithon</h1>
        <div className='flex justify-around'>
        <ThemeToggle />
        <User/>
        </div>
      </header>
      <main className="p-4">
        <Button variant="outline">Button</Button>
      </main>
    </div>
    </>
  )
}

export default App
