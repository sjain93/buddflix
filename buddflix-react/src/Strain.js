import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Strains = ({ selectedRace }) => {
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
        <div className="strains" key={index}>
            <h2 className='strain-name'>{weed.name}</h2>
            <ul>
                <li>{weed.effects}</li>
            </ul>
        </div>
    ));

    return (
        <div>
            <h2>{selectedRace.name}</h2>
            {strainDisplay}
        </div>
    )
}

export default Strains;