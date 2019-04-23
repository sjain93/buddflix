import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import strain from '../Images/strain.jpg';
import welcome from '../Images/welcomeBanner.png';
import Avengers from '../Images/Avengers.png'
import './Slideshow.scss';
import axios from 'axios';

const slideImages = [
    welcome,
    strain,
    Avengers
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const api_key = process.env.REACT_APP_TMDB_API_KEY
// const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}`
const url = `https://api.themoviedb.org/3/keyword/54169/movies?api_key=${api_key}&language=en-US&include_adult=false`

const imgBaseUrl = 'https://image.tmdb.org/t/p/w1400_and_h450_face/'

const Slideshow = () => {
    const [images, setImages] = useState(slideImages);


    useEffect(() => {
        axios.get(url).then(response => {
            let newImages = [{'url': welcome, 'title': null }];
            const results = response.data.results.slice(3, 7);
            results.forEach(element => {
                newImages.push({'url':imgBaseUrl + element.backdrop_path, 'title': element.title});
            });
            setImages(newImages);
        });
    }, []);

    const slides = images.map((img, index) => (
        <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${img.url})`}} />
            <h2 className='slideshow-title'>{img.title}</h2>
        </div>
    ));

    return (
        <Slide {...properties}>
            {slides}
        </Slide>
    )
}

export default Slideshow;