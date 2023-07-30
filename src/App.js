import React,  {useEffect, useState}from "react";
import Home from "./Components/Home";
import "./App.css"
import Login from "./Components/auth/Login";
import SignUp from "./Components/auth/SignUp";
import AuthDetails from "./Components/AuthDetails"





export default function App() {
  const [podcastData, setPodcastData] = useState({});
  const [count, setCount] = useState(0)
  


  useEffect(() => {
    fetch("https://podcast-api.netlify.app/id/10716/1")
      .then((res) => res.json())
      .then(podcastData => setPodcastData(podcastData))
  }, [count]);
        

  return (
    <div>
      <Home />
      <Login />
      <SignUp />
      <AuthDetails />
      
     
      
      <pre>{JSON.stringify(podcastData, null, 2)}</pre>
    </div>
  );
}


