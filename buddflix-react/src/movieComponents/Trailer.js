import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Trailer.scss'

const Trailer = ( {movieId} ) => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY
    const [trailerId, setTrailerId] = useState()

    useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=videos`
    axios.get(url).then(response => {
    if (response.data.videos.results.length > 0) {
    const results = `https://www.youtube.com/embed/`+ response.data.videos.results[0].key
    setTrailerId(results)
    } else {
        const rickRoll = "https://www.youtube.com/embed/dQw4w9WgXcQ"
        setTrailerId(rickRoll)
    }
    })
    },[movieId])
    console.log(trailerId)

    return (
    <>
        <div className='trailer-box'>
            <iframe title={movieId} width="560" height="315" src={trailerId} className='trailer'
            frameBorder="0"  allowFullScreen></iframe>
        </div>
    </>
    )

}
export default Trailer;