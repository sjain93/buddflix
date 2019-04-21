import React from 'react';
import Slideshow from './Slideshow/Slideshow'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from "./StrainComponets/Categories";

const Home = () => {

return (
    <>
    <Slideshow />
        <Router>
        <li className='link-hover'>
            <Link to="/categories">Pick a strain BITCH!</Link>
        </li>
        <Route path="/categories" exact component={Categories} />
        </Router>
    </>
)
}

export default Home;