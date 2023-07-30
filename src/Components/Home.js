import React from 'react'
import Navbar from './Navbar'





export default function Home() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="home-container">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
       
   

    </div>
  )
}
