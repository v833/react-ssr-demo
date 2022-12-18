import React, { useEffect } from 'react'

export const App = () => {
  // This will only run on the client
  useEffect(() => {
    console.log('mounted')
  }, [])

  return (
    <div>
      <h1 onClick={() => alert('clicked')}>Click!</h1>
    </div>
  )
}
