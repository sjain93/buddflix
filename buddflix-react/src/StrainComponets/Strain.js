import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops'
import './Categories.scss';
import Movie from '../Movie';

const Strain = ({ weed, index, selectedRace}) => {
    const [genre, setGenre] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);

function selectRandom(array) {
    let num = Math.floor((Math.random() * array.length));
    return (array[num]);
}

    useEffect(() => {

        if (selectedRace.id) {
            let tempGenre = []
            let raceId = selectedRace.id
            const url = `http://localhost:8000/api/genre?race=${raceId}`
            axios.get(url).then(response => {
                let respObj = response.data.objects;
                respObj.forEach((item) => {
                    tempGenre.push(item.tmdb_id)
                    setGenre(tempGenre)
                })
            })
        }
    }, [selectedRace]);

    console.log(`Genre is`+ genre)
    return (
    <>
    <Spring
    from={{opacity: 0, marginLeft: -500}}
    to={{opacity: 1, marginLeft: 0}}
    >
        {props => (
            <div style={props}>
                <div className='button-div'>
                    <button className='strain-button' onClick={() => setSelectedGenre(selectRandom(genre))}>
                        <h1 className='strain-name'>{weed.name}</h1>
                    </button>
                </div>
            </div>
            )}
    </Spring>
    <Movie selectedGenre={selectedGenre} />
    </>


    )

}

export default Strain;