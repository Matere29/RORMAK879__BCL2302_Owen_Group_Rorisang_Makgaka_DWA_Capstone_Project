
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import the CSS file for card styling

const ShowDetails = () => {
  const [show, setShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    // Fetch the show details from the API
    axios.get('https://podcast-api.netlify.app/shows/show_id')
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('Error fetching show details:', error);
      });
  }, []);

  const handleSeasonSelect = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
  };

  const handleEpisodeClick = (episodeId) => {
    // Handle episode click logic here (e.g., play audio, show episode details, etc.)
    console.log('Playing episode:', episodeId);
  };

  return (
    <div>
      {show ? (
        <div>
          <h1>{show.name}</h1>
          <p>{show.description}</p>
          <h2>Seasons</h2>
          <div>
            {show.seasons.map(season => (
              <button
                key={season.number}
                className={selectedSeason === season.number ? 'active' : ''}
                onClick={() => handleSeasonSelect(season.number)}
              >
                Season {season.number}
              </button>
            ))}
          </div>
          <h2>Episodes</h2>
          <div>
            {selectedSeason && show.seasons.find(season => season.number === selectedSeason)
              ? show.seasons.find(season => season.number === selectedSeason).episodes.map(episode => (
                  <div className="card" key={episode.id} onClick={() => handleEpisodeClick(episode.id)}>
                    <h3>{episode.title}</h3>
                    <p>{episode.description}</p>
                    {/* Add other episode details as needed */}
                  </div>
                ))
              : <p>Select a season to view episodes.</p>}
          </div>
        </div>
      ) : (
        <p>Loading show details...</p>
      )}
    </div>
  );
};

export default ShowDetails;
