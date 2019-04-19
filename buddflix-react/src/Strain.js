import React from 'react';


const Strain = ({ weed, index }) => {

    return (
        <div className="strains" key={index}>
            <h2 className='strain-name'>{weed.name}</h2>
            <ul>
                <li>{weed.effects}</li>
            </ul>
        </div>
    )
}

export default Strain;