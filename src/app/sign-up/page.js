import React from 'react'
import CheckBrowser from '../components/authComponents/checkBrowser'

export const metadata = {
  title: "Sign Up",
  description: "Sigmup Page for Social Media App"
}
const page = () => {
  return (
    <div>
          <CheckBrowser />
    </div>
  )
}

export default page
