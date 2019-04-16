import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from "./Categories";
import About from './About';
import Home from './Home';

const Navigation = () => {
    return (
    <Router>
            <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/categories" exact component={Categories} />
            </div>
    </Router>
);
}

export default Navigation;
