import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Movie = ({ selectedGenre }) => {
const [movie, setMovie] = useState()
const api_key = process.env.REACT_APP_TMDB_API_KEY




useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${selectedGenre}`
        const fetchData = async () => {
        const result = await axios.get(url)
        console.log(url)
        const randomMovie = selectRandom(result.data.results);
        setMovie(randomMovie);

        }
    fetchData();
    console.log(movie);


}, [selectedGenre])




function selectRandom(array) {
    let num = Math.floor((Math.random() * array.length));
    return(array[num]);
}



console.log(`Selected genre is ` + selectedGenre);

return (
    <>
        {/* we need to grab the strain
        then we need to get the effects from strain
        put effect into movie api keyword search
        display said movie */}
        {/* Hello{genre} */}


    </>
) 
}

export default Movie;