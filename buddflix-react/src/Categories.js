import React, { useEffect, useState } from 'react';
import 'axios';
import axios from 'axios';

const url = 'http://localhost:8000/api/strain/?race=2'



const Categories = () => {
    // const strains = []
    // const getStrains = () => {
    //     axios.get(url).then(response => {
    //     strains.push(response.objects)
    // }
    //     )}

    // getStrains()
    // console.log(strains)
    const [strains, setStrains] = useState([])

    useEffect(() => {
        axios.get(url).then(response => {
            let newStrains = [];
            const results = response.data.objects;
            console.log(results)
            results.forEach(element => {

                newStrains.push(element);
            });
            setStrains(newStrains);
        });
    }, []);

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
    {strainDisplay}
    </div>
)
}

export default Categories;