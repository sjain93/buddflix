import React, { useState, useEffect } from 'react';



const Movie = ({ strainSelected }) => {
const [movie, setMovie] = useState([])
const api_key = process.env.REACT_APP_TMDB_API_KEY
// const url = `https://api.themoviedb.org/3/keyword/${strainSelected.effect}/movies?api_key=${api_key}&language=en-US&include_adult=false`    
console.log(strainSelected.effects)
let effectList = strainSelected.effects

const positiveEffects = effectList.filter((effect) => effect['category'] === 'positive');
let effectArray = [];
let listGenerator = positiveEffects.forEach(function(item) {
    effectArray.push(item.name);
})
console.log(effectArray);

function selectRandom(array) {
    let num = Math.floor((Math.random() * array.length));
    return(array[num]);
}

console.log(selectRandom(effectArray));
console.log(positiveEffects);


// strainEffects.push(strainSelected.effects);
// console.log(strainEffects);
// const effectList = strainEffects.forEach(function(item) {
//     console.log(item['category'])
// })
// console.log(effectList());





return (
    <>
        {/* we need to grab the strain
        then we need to get the effects from strain
        put effect into movie api keyword search
        display said movie */}


    </>
) 
}

    // useEffect(() => {
    //     if (strainSelected.id) {
            
    //     }   
    // },[])

        
    
export default Movie;