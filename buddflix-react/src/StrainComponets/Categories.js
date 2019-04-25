import React, { useEffect, useState, useRef } from 'react';
import { Spring } from 'react-spring/renderprops'
import StrainList from './StrainList';
import axios from 'axios';
import './Categories.scss';

const url = 'http://localhost:8000/api/race/'

const Categories = () => {
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState({});
    const raceRef = useRef(null);

    useEffect(() => {
        axios.get(url).then(response => {
            const results = response.data.objects;
            setRaces(results);
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, raceRef.current.offsetTop)
        // const t = setTimeout(() => window.scrollTo(0, raceRef.current.offsetTop), 280)
        // return () => clearTimeout(t)
    }, [races]);

    return (
        <Spring
        from={{opacity: 0}}
        to={{opacity: 1}}
        >
        {props => (
            <div style={props} >
                <div className="races" ref={raceRef} >
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
