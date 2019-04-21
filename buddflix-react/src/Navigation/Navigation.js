import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Nav.scss'
import Categories from "../StrainComponets/Categories";
import About from '../About';
import Home from '../Home';
import logo from '../Images/logo.png';

const Navigation = () => {
    return (
    <Router>
    <div className='nav-container'>
    <div className='navbar'>
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
    </div>
    </div>

            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/categories" exact component={Categories} />

    </Router>
);
}

export default Navigation;
