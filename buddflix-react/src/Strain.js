import React from 'react';


const Strain = ({ weed, index }) => {

    const effectList = weed.effects.map((effect) => {
        return (
            <li>{effect}</li>
        )
    })

    return (
        <div className="strains" key={index}>
            <h2 className='strain-name'>{weed.name}</h2>
            <ul>
                {effectList}
            </ul>
        </div>
    )
}

export default Strain;