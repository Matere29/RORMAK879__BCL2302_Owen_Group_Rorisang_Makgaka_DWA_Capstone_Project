import React from 'react'
import { useState, useEffect } from 'react'
import Expandable from './Expandable';
import Navbar from '../Components/Navbar';


export default function BlogPage() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch("https://podcast-api.netlify.app/shows")
            .then(response => response.json())
            .then((data) => setPosts(data));
    }, []);

    const [query, setQuery] = useState("");

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const fetching = posts.filter(show => show.title.toLowerCase().includes(query))
        setPosts(fetching)
    }
   
    let Preview = posts.map((show) => {
       
        return (
            < div className='card' key={show.id} >
                <img src={show.image}  />
                <h3>{show.title}</h3>
                <h4>Season : {show.seasons}</h4>
                <button>Add to favourite</button>
                <p>Description : {show.description}</p>
                <Expandable children={show.description} maxChars={show.description}/>
                
            </div >
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
            <select>
       
       <option>A-Z</option>
       <option>Z-A</option>
       <option>Newest Date</option>
       <option>Oldest Date</option>
   </select>
        </form>
        

           {posts.length < 0 ? <h1>Loading...</h1> : 
           <div className="card-container" >
                {Preview}
            </div>}
        </div>


    )
}
