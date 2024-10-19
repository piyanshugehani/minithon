import React from 'react'
import { SignUp } from '@clerk/clerk-react'
function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100"> {/* Optional background color */}
      <div className="w-full max-w-sm"> {/* Optional max-width for SignIn component */}
        <SignUp />
      </div>
    </div>
  )
}

export default Signup