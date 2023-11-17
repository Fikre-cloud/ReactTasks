import React from 'react';
import HomePage from './HomePage';
import About from './About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function SimpleRouting(){

    return (
    <>
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" exact Component={HomePage}/>
                <Route path="/about" Component={About}/>
            </Routes>
        </Router>
    </>
    )

}

export default SimpleRouting