import React from 'react';
import useForm from 'react-hook-form';
import './age.css';


const AgeVerification = () => {
    const { register, handleSubmit, errors } = useForm() // initialise the hook
    const onSubmit = (data) => { console.log(data) } // callback when validation pass

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input type="number" name="age" ref={register({ min: 19 })} /> {/* apply a Refex validation */}
            {errors.age && 'You must be 19 years old or older to enter this website'} {/* error message */}

            <input type="submit" />
        </form>
    )      
}

export default AgeVerification;