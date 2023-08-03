import React from 'react'
import { useState, useEffect } from 'react'
import Expandable from './Expandable';
export default function BlogPage() {


    const [shows, setShows] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
   

    useEffect(() => {
        fetch("https://podcast-api.netlify.app/shows")
            .then(response => response.json())
            .then((data) => setShows(data));
    }, []);
    
      
    const [query, setQuery] = useState("");

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const fetching = shows.filter(show => show.title.toLowerCase().includes(query))
        setShows(fetching)
    }

    useEffect(() => {
        sortShows();
    }, [sortOrder]);
    
//Sorting shows
    const sortShows = () => {
        const sorted = [...shows].sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return sortOrder === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
        });
        setShows(sorted);
    };

    const handleSortChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
    const handleSortByTitleDescending = () => {
        const sortedShows = [...shows].sort((a, b) => b.title.localeCompare(a.title));
        setShows(sortedShows);
      };


    let Preview = shows.map((show) => {



        return (
           <>
           


            < div className='card' key={show.id} >
                <img src={show.image} alt='' />
                <h3>{show.title}</h3>
                <h4>Season : {show.seasons}</h4>
                <button>Add to favourite</button>
                <p>Description : {show.description}</p>
                <Expandable children={show.description} maxChars={show.description} />

            </div >
            </> 

        )


    })

    return (

        <div> <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
            />
            <button type="submit">Search</button>

        </form>
        <h3>List of Shows</h3>
       <button onClick={handleSortChange}>Sort by Title {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</button>
       <button onClick={handleSortByTitleDescending}>Sort Z-A</button>



            {shows.length < 0 ? <h1>Loading...</h1> :
                <div className="card-container" >
                    {Preview}
                </div>}
        </div>


    )

}
