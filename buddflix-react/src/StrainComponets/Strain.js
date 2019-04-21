import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops'
import Movie from '../Movie'
import './Categories.scss';

const Strain = ({ weed, index, }) => {

    const [strainSelected, setStrainSelected] = useState(weed)


    return (
    <>
    <Spring
    from={{opacity: 0, marginLeft: -500}}
    to={{opacity: 1, marginLeft: 0}}
    >
        {props => (
            <div style={props}>
                <div>
                    <button onClick={() => setStrainSelected(weed)} key={weed.id}>
                        {weed.name}
                    </button>
                </div>
            </div>
            )}
    </Spring>

            <Movie strainSelected={strainSelected} key={strainSelected.id} />
    </>


    )

}

export default Strain;