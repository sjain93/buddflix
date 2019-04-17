import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const api_key = process.env.REACT_APP_TMDB_API_KEY

const url = `https://api.themoviedb.org/3/movie/76341?api_key=${api_key}/discover/movie?sort_by=popularity.desc`

const films = () => {
axios.get(url).then(response => {
    console.log(response.data) 

})
}

const TMDB = () => {
    return (
        {films}
    )
}

export default TMDB;