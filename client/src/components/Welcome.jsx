import React from 'react'

export const Welcome = (userDetails) => {
  const user = userDetails.user
  const logout = async () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    )
  }
  return (
    <div>
      <h2>Welcome {user.name}</h2>
    
      <button onClick={logout}>Log Out</button>
    </div>


  )
}
