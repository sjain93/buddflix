import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Nav.scss'
import logo from '../logo.png';
import Categories from "../Categories";
import About from '../About';
import Home from '../Home';

const Navigation = () => {
    return (
    <Router>
            <header>
            <img src={logo} className="App-logo" alt="logo" />
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
            </header>
    </Router>
);
}

export default Navigation;
