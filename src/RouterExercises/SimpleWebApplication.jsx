import React from 'react';
import HomePage from './HomePage';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function SimpleWebApplication() {
    return (

        <Router>
           <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/news">News</Link></li>
              </ul>
           </nav>
           <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/contact" Component={Contact} />
              <Route path = "*" Component={PageNotFound} />
           </Routes>
        </Router>
    )

}

export default SimpleWebApplication