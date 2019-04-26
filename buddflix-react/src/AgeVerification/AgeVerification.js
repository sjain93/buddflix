
import React, { useState } from 'react';
import useForm from 'react-hook-form';
import './age.scss';
import welcome from '../Images/welcomeBanner.png';

const AGE_KEY = 'ageVerified';

const AgeVerification = () => {
    let ageVerified = false 
    const [visible, setVisible] = useState(!ageVerified);

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = () => {
        setVisible(false);
        window.localStorage.setItem(AGE_KEY, true);

    }

    return (
        <>
        {visible &&
            <div className="modal">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <img src={welcome} alt="Welcome-Banner" className="img-responsive"></img>
                    <p>
                        Please Enter Your Age
                    </p>
                    <input type="number" name="age" ref={register({ required: true, min: 19 }, )} /> {/* apply a Refex validation */}
                    <p>
                        {errors.age && 'You must be 19 years old or older to enter this website'} {/* error message */}
                    </p> 
                    <input type='submit' />   
                </form>
            </div>
        }
        </>
    )
}


export default AgeVerification;

