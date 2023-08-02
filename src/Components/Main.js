import Hero from './Hero';
import BlogPage from '../Pages/BlogPage';
import Navbar from './Navbar';
import React from 'react'




export default function Main(props) {
  const [darkMode, setDarkMode] = React.useState(true);
  
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  

  return (
  <>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

       
        <Hero darkMode={darkMode}  />
        <BlogPage darkMode={darkMode} />
        
  </>
  )
}