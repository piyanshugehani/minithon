import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import Signup from './components/Signup.jsx'
import { BrowserRouter,Routes, Route, useNavigate, Router } from 'react-router-dom'
import Signin from './components/Signin.jsx'
import Lead from './components/Lead.jsx'
import Calendar from './components/Calendar.jsx'
import Cal from './components/Cal.jsx'
import Events from './components/Events.jsx'
import Communities from './components/Communities.jsx'
import Doubts from './components/Doubts.jsx';
import Dou from './components/Dou.jsx'
import Maps from './components/MapComponent.jsx'
import Com from './components/Com.jsx'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const ClerkWithRoutes = () => {
  const navigate=useNavigate();

  return (<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/signup/" element={<Signup/>}/>
      <Route path="/signin/" element={<Signin/>}/>
      <Route path="/leaderboard/" element={<Lead/>}/>
      <Route path='/calendar/' element={<Cal/>} />
      <Route path='/events/' element={<Events/>}/>
      <Route path="/community/" element={<Com />} />
        <Route path="/community/:communityId" element={<Dou />} />
      <Route path='/maps/' element={<Maps/>}/>
      
    </Routes>
  </ClerkProvider>)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes/>
    </BrowserRouter>
  </StrictMode>,
)
