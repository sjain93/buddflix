import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Nav.scss'
import Categories from "../Categories";
import About from '../About';
import Home from '../Home';

const Navigation = () => {
    return (
    <Router>
            <nav>
                <ul>
                    <li className='link-hover'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='link-hover'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='link-hover'>
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
            </nav>

            
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/categories" exact component={Categories} />
            
    </Router>
);
}

export default Navigation;
