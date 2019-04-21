
import React, { useState } from 'react';
import useForm from 'react-hook-form';
import './age.scss';
import welcome from '../Images/welcomeBanner.png';

const AGE_KEY = 'ageVerified';

const AgeVerification = () => {
    let ageVerified = false // !window.localStorage.getItem(AGE_KEY);
    // if (date greater than 24 hours) {

    // }
    const [visible, setVisible] = useState(!ageVerified);

    const { register, handleSubmit, errors } = useForm() // initialise the hook
    const onSubmit = (data) => {
        setVisible(false);
        window.localStorage.setItem(AGE_KEY, true);

    }

    return (
        <>
        {visible &&
            <div className="modal">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <img src={welcome} alt="Welcome-Banner" className="img-responsive"></img>
                    <p>Please Enter Your Age</p>

                    <input type="number" name="age" ref={register({ min: 19 })} /> {/* apply a Refex validation */}
                    {errors.age && 'You must be 19 years old or older to enter this website'} {/* error message */}

                    <input type="submit" />
                </form>
            </div>
        }
        </>
    )
}


export default AgeVerification;

