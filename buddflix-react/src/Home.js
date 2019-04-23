import React from 'react';
import Slideshow from './Slideshow/Slideshow'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from "./StrainComponets/Categories";
import './StrainComponets/Categories.scss';

const Home = () => {



return (
    <>
    <Slideshow />
        <Router>
            <div className='pick-a-strain'>
                <Link to="/categories" >Get started. Pick a strain!</Link>
            </div>
        <Route path="/categories" exact component={Categories} />
        </Router>
    </>
)
}

export default Home;