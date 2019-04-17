import React from 'react';
import useForm from 'react-hook-form';
import './age.css';
import ToggleContent from '../ToggleContent';
import Modal from '../Modal/Modal';






const AgeVerification = () => {
    const { register, handleSubmit, errors } = useForm() // initialise the hook
    const onSubmit = (data) => { console.log(data) } // callback when validation pass

    return (

        <ToggleContent
        toggle={show => <button onClick={show}>Open</button>}
            content={hide => (
                <Modal>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="number" name="age" ref={register({ min: 19 })} /> {/* apply a Refex validation */}
                {errors.age && 'You must be 19 years old or older to enter this website'} {/* error message */}

                <input type="submit" />
            <button onClick={hide}>Close</button>
            </form>
                </Modal>
            )}

        />

    )      
}


export default AgeVerification;
