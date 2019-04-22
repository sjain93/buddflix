import React, { useEffect, useState } from 'react';
import { Spring } from 'react-spring/renderprops'
import StrainList from './StrainList';
import axios from 'axios';
import './Categories.scss';

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
        <Spring
        from={{opacity: 0, marginTop: -500}}
        to={{opacity: 1, marginTop: 0}}
        >
        {props => (
            <div style={props}>
            <div className="races">
            {races.map(race => (
                <button className='btn' onClick={() => setSelectedRace(race)} key={race.id}>
                    <span>{race.name}</span>
                </button>
            ))}
            </div>
            <StrainList selectedRace={selectedRace} />

            </div>
        )}
        </Spring>

    )
}

export default Categories;
