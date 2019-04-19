import React, { useState } from 'react';
import Movie from './Movie'


const Strain = ({ weed, index, }) => {


    const [strainSelected, setStrainSelected] = useState({})


    return (
    <>
        <div>
                <button onClick={() => setStrainSelected(weed)} key={weed.id}>
                    {weed.name}
                </button>
        </div>
            <Movie strainSelected={strainSelected} key={strainSelected.id} />

    </>


    )

}

export default Strain;