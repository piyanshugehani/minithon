import React from 'react'
import { SignIn } from '@clerk/clerk-react'
function Signin() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100"> {/* Optional background color */}
      <div className="w-full max-w-sm"> {/* Optional max-width for SignIn component */}
        <SignIn />
      </div>
    </div>
  )
}

export default Signin