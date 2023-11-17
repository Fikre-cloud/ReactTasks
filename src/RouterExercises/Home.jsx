import React from 'react';
import {Link} from 'react-router-dom'
function Home(){
    return(
        <>
        <h1>Welcome to the movies home</h1>
        <ul>
            <li><Link to="/movies/leapyear">Leap Year</Link></li>
            <li><Link to="/movies/godfather">God Father</Link></li>
            <li><Link to="/movies/gameofthrones">Game of Thrones</Link></li>
        </ul>
        </>
    )
}

export default Home;