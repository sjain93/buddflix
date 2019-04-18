import React, { useEffect, useState } from 'react';
import Strains from './Strain';
import axios from 'axios';

const url = 'http://localhost:8000/api/race/'

const Categories = () => {
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState({});

    useEffect(() => {
        axios.get(url).then(response => {
            const results = response.data.objects;
            setRaces(results);
        });
    }, []);

    return (
        <div>
            {races.map(race => (
                <button onClick={() => setSelectedRace(race)} key={race.id}>
                    {race.name}
                </button>
            ))}
            <Strains selectedRace={selectedRace} />
        </div>
    )
}

export default Categories;
