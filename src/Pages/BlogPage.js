import { useState, useEffect } from 'react';
//import Expandable from './Expandable';
import axios from 'axios';
import Fuse from 'fuse.js';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import Main from '../Components/Main';

export default function BlogPage() {
    const inputStyle = {
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none'
    }
    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'rgb(232, 164, 176)',
        color: 'black',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        outline: 'none',
        // Add any other CSS properties you want to customize
    };
    const [shows, setShows] = useState([]);
    //const [sortOrder, setSortOrder] = useState('asc');
    const [selectedShow, setSelectedShow] = useState(null);
    const [selectedSeasons, setSelectedSeasons] = useState([]);
    const [query, setQuery] = useState('');
    const [sortedBy, setSortedBy] = useState('default');
    const [favorites, setFavorites] = useState([]);
    const [filteredShows, setFilteredShows] = useState([]);


    // Fetch the list of shows from the API
    useEffect(() => {
        fetch('https://podcast-api.netlify.app/shows')
            .then(response => response.json())
            .then(data => {
                setShows(data);
                setFilteredShows(data);
            });
    }, []);

  

    const handleShowClick = showId => {
        // Fetch the details of the selected show from its individual endpoint
        axios
            .get(`https://podcast-api.netlify.app/shows/${showId}`)
            .then(response => {
                setSelectedShow(response.data);
                setSelectedSeasons(response.data.seasons);
            })
            .catch(error => {
                console.error('Error fetching show details:', error);
            });
    };

    function handleChange(event) {
        setQuery(event.target.value);
    }

 

    // useEffect(() => {
    //     sortShows();
    // }, [sortOrder]);

    useEffect(() => {
        filterShowsByTitle();
    }, [query]);

    // Sorting shows
    // const sortShows = () => {
    //     let sorted;
    //     if (sortOrder === 'asc') {
    //         sorted = [...filteredShows].sort((a, b) => a.title.localeCompare(b.title));
    //     } else {
    //         sorted = [...filteredShows].sort((a, b) => b.title.localeCompare(a.title));
    //     }
    //     setShows(sorted);
    // };

    // const handleSortChange = () => {
    //     setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    // };
    // Sorting functions
    const sortByTitleAsc = () => {
        setShows([...shows.sort((a, b) => a.title.localeCompare(b.title))]);
        setSortedBy('titleAsc');
    };

    const sortByTitleDesc = () => {
        setShows([...shows.sort((a, b) => b.title.localeCompare(a.title))]);
        setSortedBy('titleDesc');
    };

    const sortByDateAsc = () => {
        setShows([...shows.sort((a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated))]);
        setSortedBy('dateAsc');
    };

    const sortByDateDesc = () => {
        setShows([...shows.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))]);
        setSortedBy('dateDesc');
    };


    const filterShowsByTitle = () => {
        if (query.trim() === '') {
            setFilteredShows(shows);
        } else {
            const fuse = new Fuse(shows, { keys: ['title'] });
            const result = fuse.search(query);
            setFilteredShows(result.map(item => item.item));
        }
    };

    const handleAddToFavorites = episode => {
        setFavorites(prevFavorites => [...prevFavorites, episode]);
    };

    const handleRemoveFromFavorites = episode => {
        setFavorites(prevFavorites => prevFavorites.filter(item => item !== episode));
    };

    const handleFilterByGenre = genre => {
        const filteredByGenre = shows.filter(show => show.genres.includes(genre));
        setFilteredShows(filteredByGenre);
    };

    return (
        <div>
            {selectedShow ? (
                // Render seasons and episodes view
                <div>
                    <h2>{selectedShow.name}</h2>
                    <button onClick={() => setSelectedShow(null)}>Back to Shows</button>
                    <h3>Seasons</h3>
                    {selectedSeasons.map(season => (
                        <div key={season.id}>
                            <h4>Season {season.number}</h4>
                            <ul>
                                {season.episodes.map(episode => (
                                    <li key={episode.id}>
                                        {episode.title}
                                        <button onClick={() => handleAddToFavorites(episode)}>Add to Favorites</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                // Render main show view
                <div>
                    <form onSubmit={event => event.preventDefault()}>
                        
                        <input  
                            type="text"
                            value={query}
                            style={inputStyle}
                            onChange={handleChange}
                            placeholder="Search..."
                        />
                    </form>

                    <h3>List of Shows</h3>
                    {/* <button onClick={handleSortChange}>
                        Sort by Title {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                    </button>
                    <button onClick={() => setSortOrder('asc')}>Sort by Date Updated (asc)</button>
                    <button onClick={() => setSortOrder('desc')}>Sort by Date Updated (desc)</button> */}
                    <div>
                        <button style={buttonStyle} onClick={sortByTitleAsc}>Sort by Title (A-Z)</button>
                        <button style={buttonStyle} onClick={sortByTitleDesc}>Sort by Title (Z-A)</button>
                        <button style={buttonStyle} onClick={sortByDateAsc}>Sort by Date (Oldest First)</button>
                        <button style={buttonStyle} onClick={sortByDateDesc}>Sort by Date (Newest First)</button>
                    </div>

                    {shows.length === 0 ? (
                        <h1>Loading...</h1>
                    ) : (
                        <div>
                            <ul className="card-container">
                                {filteredShows.map(show => (
                                    <div
                                        className="card"
                                        key={show.id}
                                        onClick={() => handleShowClick(show.id)}
                                    >
                                        <li>
                                            <h3>{show.title}</h3>
                                            
                                            <img src={show.image} alt="" width='60%' />
                                            <p>Seasons: {show.seasons}</p>
                                    
                                            <p>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
                                            <p>Genres: {show.genres.join(', ')}</p>
                                            <button>Add to favorite</button>
                                        </li>
                                    </div>
                                ))}
                            </ul>

                            {/* Favorites */}
                            <div>
                                <h3>Favorite Episodes</h3>
                                {favorites.length === 0 ? (
                                    <p>No favorites yet</p>
                                ) : (
                                    <ul>
                                        {favorites.map(episode => (
                                            <li key={episode.id}>
                                                <p>{episode.show}</p>
                                                <p>Season {episode.season}</p>
                                                <p>{episode.title}</p>
                                                <button onClick={() => handleRemoveFromFavorites(episode)}>Remove from Favorites</button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Genre Filter */}
            <div>
                <h3>Genres Filter</h3>
                {shows.length === 0 ? (
                    <p>Loading genres...</p>
                ) : (
                    <ul>
                        {shows.reduce((acc, show) => {
                            show.genres.forEach(genre => {
                                if (!acc.includes(genre)) {
                                    acc.push(genre);
                                }
                            });
                            return acc;
                        }, []).map(genre => (
                            <li key={genre} onClick={() => handleFilterByGenre(genre)}>{genre}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
