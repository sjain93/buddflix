import React, { useEffect, useState, useRef } from 'react';
import Strain from './Strain';
import Movie from '../Movie';
import axios from 'axios';
import './Categories.scss';

const StrainList = ({ selectedRace }) => {
    const [strains, setStrains] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState();
    const strainsRef = useRef(null);

    useEffect(() => {
        if (selectedRace.id) {
            const url = `http://localhost:8000/api/strain/?race=${selectedRace.id}`
            axios.get(url).then(response => {
                const results = response.data.objects;
                setStrains(results);
            });
        }
    }, [selectedRace])

    useEffect(() => {
        if (selectedRace.id) {
            let tempGenre = []
            let raceId = selectedRace.id
            const url = `http://localhost:8000/api/genre?race=${raceId}`
            const fetchData = async () => {
            const result = await axios.get(url)
                let respObj = result.data.objects;
                respObj.forEach((item) => {
                    tempGenre.push(item.tmdb_id)
                    setGenres(tempGenre)
                })
            }
            fetchData()
        }
    }, [selectedRace]);

    useEffect(() => {
        window.scrollTo(0, strainsRef.current.offsetTop);
    }, [strains])

    const strainDisplay = strains.map((weed, index) => (
        <Strain genres={genres} weed={weed} key={index} setSelectedGenre={setSelectedGenre} />
    ));

    function selectRandom(array) {
        let num = Math.floor((Math.random() * array.length));
        return (array[num]);
    }

    return (
        <>
        <h2 className='strain-race'  ref={strainsRef}>{selectedRace.name}</h2>
        <div className="strains">
            {strainDisplay}
        </div>
        {selectedGenre && <Movie selectedGenre={selectedGenre} />}
        </>
    )
}

export default StrainList;