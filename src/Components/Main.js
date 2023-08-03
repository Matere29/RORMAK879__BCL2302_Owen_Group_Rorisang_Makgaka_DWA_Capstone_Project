import Hero from './Hero';
import BlogPage from '../Pages/BlogPage';
import React from 'react'
import MainLayout from '../layout/MainLayout';
//import Search from '../Search';


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
       
         <Hero  /> 
        <BlogPage />
        {/* <ShowDetail /> */}
        </MainLayout>
        
  </>
  )
}