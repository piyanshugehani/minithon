import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider,useUser,RedirectToSignIn } from '@clerk/clerk-react'
import Signup from './components/Signup.jsx'
import { BrowserRouter,Routes, Route, useNavigate, Router, Navigate } from 'react-router-dom'
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
import { Loader2, LoaderCircleIcon } from 'lucide-react'
import { transform } from 'framer-motion'


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const ProtectedRoute = ({ element }) => {
  const { isSignedIn, isLoaded } = useUser(); // Get the current user's sign-in status
  
  if (!isLoaded) {
    // If the user data is still loading, return a loading spinner or placeholder
    return (
      <div
        className="flex justify-center items-center"
        style={{ transform: 'translate(50%, 50%)' }}
      >
        <Loader2 />
      </div>
    );
  }
  

  if (!isSignedIn) {
    return <Navigate to="/signin" replace />; // Redirect to sign-in if not logged in
  }
  return element;
};
const ClerkWithRoutes = () => {
  const navigate=useNavigate();

  return (<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<App />} />} />
      <Route path="/signup/" element={<Signup/>}/>
      <Route path="/signin/" element={<Signin/>}/>
      <Route path="/leaderboard/" element={<ProtectedRoute element={<Lead />} />} />
      <Route path='/calendar/' element={<ProtectedRoute element={<Cal />} />} />
      <Route path='/events/' element={<Events />} />
      <Route path="/community/" element={<ProtectedRoute element={<Com />} />} />
        <Route path="/community/:communityId" element={<ProtectedRoute element={<Dou />} />} />
      <Route path='/maps/' element={<ProtectedRoute element={<Maps />} />} />
      
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
