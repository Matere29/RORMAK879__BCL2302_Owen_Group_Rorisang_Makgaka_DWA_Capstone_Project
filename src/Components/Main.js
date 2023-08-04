import Hero from './Hero';
import BlogPage from '../Pages/BlogPage';
import React from 'react'
import MainLayout from '../layout/MainLayout';
import Seasons from './Seasons';
//import SpecificShow from './SpecificShow';
//import Search from '../Search';
//import app from './base'



export default function Main(props) {
  // const [darkMode, setDarkMode] = React.useState(true);
  
  // function toggleDarkMode() {
  //   setDarkMode(prevMode => !prevMode)
  // }
  

  return (
  <>
   <MainLayout>
        {/* <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Search /> */}
        {/* <button onClick={()=> app.auth().signOut()}>Sign out</button> */}
       <Seasons />
        <Hero  /> 
        <BlogPage />
        {/* <ShowDetail /> */}
       
        </MainLayout>
        
  </>
  )
}