import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './movie.scss';
import Trailer from './Trailer'

const Movie = ({ selectedGenre}) => {
const [movie, setMovie] = useState()
const [movieId, setMovieId] = useState()
const movieRef = useRef(null)
const api_key = process.env.REACT_APP_TMDB_API_KEY
const imgBaseUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'


useEffect(() => {

    //console.log('Fire effect', selectedGenre)
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${selectedGenre}`
    const fetchData = async () => {
        const result = await axios.get(url)
        // console.log(movie);
        const randomMovie = selectRandom(result.data.results);
        console.log(randomMovie.title);
        setMovie(randomMovie);
        // console.log("movie after setting: " + movie);
    }
    fetchData();

}, [selectedGenre])

// useEffect(() => {
//     window.scrollTo(0, movieRef.current.offsetTop)
// }, [movie])

function selectRandom(array) {
    let num = Math.floor((Math.random() * array.length));
    return(array[num]);
}

// console.log(`Selected genre is ` + selectedGenre);
console.log('Movie:', movie)

const renderMovie = movie && (
    <>
    <h1 className='movie-title'>{movie.title}</h1>
    <img src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title} />
    <p>{movie.overview}</p>
    </>
)

return (
    <>
    <div>
        {renderMovie}
    </div>
    <button onClick={ ()=> setMovieId(movie.id)}>View Trailer</button>
    { movieId && <Trailer movieId={movieId} />}
    </>
)
}

export default Movie;