import React, {useState} from 'react';
import useForm from 'react-hook-form';
import './age.css';


const AgeVerification = ({ toggle, content }) => {
    const { register, handleSubmit, errors } = useForm() // initialise the hook
    const onSubmit = (data) => { console.log(data) } // callback when validation pass
    const [isShown, setIsShown] = useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);

    
    return (
                
        <>
            {toggle(show)}
            
    
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input type="number" name="age" ref={register({ min: 19 })} /> {/* apply a Refex validation */}
            {errors.age && 'You must be 19 years old or older to enter this website'} {/* error message */}

            <input type="submit" />
        </form>
            {isShown && content(hide)}
        </>
    )      
}

export default AgeVerification;
