import React, { useEffect, useState, useRef } from 'react';
import Strain from './Strain';
import axios from 'axios';
import './Categories.scss';

const StrainList = ({ selectedRace }) => {
    const [strains, setStrains] = useState([]);
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
        window.scrollTo(0, strainsRef.current.offsetTop);
    }, [strains])

    const strainDisplay = strains.map((weed, index) => (
        <Strain weed={weed} key={index} />
    ));

    return (
        <>
        <h2 className='strain-race'  ref={strainsRef}>{selectedRace.name}</h2>
        <div className="strains">
            {strainDisplay}
        </div>
        </>
    )
}

export default StrainList;