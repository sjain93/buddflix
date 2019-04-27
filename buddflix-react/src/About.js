import React from 'react';
import budds from './Images/budds.jpg';
import './About.scss'

const About = () => {
    return (
        <div className='about-page'>
            <h1 className='about-header'>About BuddFlix</h1>
            <p className='about-p'>Made by budds, for budds to enjoy budds more.</p>
            <img src={budds} className='budds' alt='The Budds' />
        </div>
    )
}

export default About;