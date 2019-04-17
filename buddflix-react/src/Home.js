import React from 'react';
import logo from './logo.png';
import strain from './strain.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from "./Categories";

const Home = () => {
return (
   
       
            <Router>
                <Link to='/categories'>
                    <div className='homepage-links'>
                        <img src={strain} alt='strain' />
                        <p>Choose a strain</p>
                    </div>
                </Link>
                    <Route path="/categories" exact component={Categories} />
            </Router>
  
)
}

export default Home;