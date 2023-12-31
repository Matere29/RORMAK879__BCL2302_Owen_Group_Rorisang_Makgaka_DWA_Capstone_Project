import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function Hero() {
  //const [showData, setShowData] = useState(null);
  const [shows, setShows] = useState([]);
  const [showIndex, setShowIndex] = useState(0);
  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("https://podcast-api.netlify.app/shows")
      .then((response) => {
        // Update the state with the fetched data
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    // Rotate through shows every 5 seconds
    const interval = setInterval(() => {
      setShowIndex((prevIndex) => (prevIndex + 1) % shows.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [shows]);
  return (
  
    
    <div className="hero-section">
      {shows.length > 0 && (
        <div className="show-info">
          <h1>{shows[showIndex].name}</h1>
          <img src={shows[showIndex].image} alt={shows[showIndex].name} />
        </div>
      )}
    </div>
  
  )
}

