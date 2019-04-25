import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Trailer = ( {movieId} ) => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY
    const [trailerId, setTrailerId] = useState()


    useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=videos`
    axios.get(url).then(response => {
        console.log(response)
    const results = `https://www.youtube.com/embed/`+ response.data.videos.results[0].key
    setTrailerId(results)
    })
    },[movieId])
    console.log(trailerId)

    return (
    <>
    <iframe title={movieId} width="560" height="315" src={trailerId}
    frameBorder="0"  allowFullScreen></iframe>
    </>
    )

}
export default Trailer;