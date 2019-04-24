import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios'

const Trailer = ({movie}) => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY
    const [trailerId, setTrailerId] = useState()
    console.log(movie)
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
        }
    };

    useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${api_key}&append_to_response=videos`
    axios.get(url).then(response => {
    const results = response.videos.results.id
    setTrailerId(results)
    })
    },[movie])


    return (
        <YouTube
        videoId={trailerId}
        opts={opts}

    />
    )
}

export default Trailer;