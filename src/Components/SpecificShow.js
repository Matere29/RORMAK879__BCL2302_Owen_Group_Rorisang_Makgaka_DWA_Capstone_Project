import React, {useState, useEffect} from 'react'

export default function SpecificShow() {
    const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
        setIsLoading(false);
      });
  }, []);

  const handleShowSelect = (showId) => {
    setIsLoading(true);
    fetch(`https://podcast-api.netlify.app/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedShow(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching show:', error);
        setIsLoading(false);
      });
  };
  return (
    <div>
    <h1>Podcasts</h1>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h2>Available Shows</h2>
        <ul>
          {shows.map((show) => (
            <li key={show.id} onClick={() => handleShowSelect(show.id)}>
              {show.name}
            </li>
          ))}
        </ul>
      </div>
    )}

    {selectedShow && isLoading ? (
      <p>Loading...</p>
    ) : selectedShow ? (
      <div>
        <h2>{selectedShow.name}</h2>
        <p>Description: {selectedShow.description}</p>
        {/* Render additional information about the selected show */}
      </div>
    ) : null}
  </div>

  )
}
