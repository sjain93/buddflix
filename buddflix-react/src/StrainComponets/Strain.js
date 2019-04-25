import React from 'react';
import { Spring } from 'react-spring/renderprops'
import './Categories.scss';

const Strain = ({ weed, index, setSelectedGenre, genres }) => {

    function selectRandom(array) {
        let num = Math.floor((Math.random() * array.length));
        return (array[num]);
    }

    return (
    <>
    <Spring
    from={{opacity: 0, marginLeft: -500}}
    to={{opacity: 1, marginLeft: 0}}
    >
        {props => (
            <div style={props}>
                <div className='button-div'>
                    <button className='strain-button' onClick={() => setSelectedGenre(selectRandom(genres))}>
                        <h1 className='strain-name'>{weed.name}</h1>
                    </button>
                </div>
            </div>
            )}
    </Spring>
    {/* <Movie selectedGenre={selectedGenre} /> */}
    </>


    )

}

export default Strain;