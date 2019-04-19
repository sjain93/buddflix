import React, { useEffect, useState } from 'react';
import Strain from './Strain';
import axios from 'axios';


const StrainList = ({ selectedRace }) => {
    const [strains, setStrains] = useState([]);

    useEffect(() => {
        if (selectedRace.id) {
            const url = `http://localhost:8000/api/strain/?race=${selectedRace.id}`
            axios.get(url).then(response => {
                const results = response.data.objects;
                setStrains(results);
            });
        }
    }, [selectedRace])

    const strainDisplay = strains.map((weed, index) => (
        <Strain weed={weed} index={index} />
    ));

    return (
        <div>
            <h2>{selectedRace.name}</h2>
            {strainDisplay}
        </div>
    )
}

export default StrainList;