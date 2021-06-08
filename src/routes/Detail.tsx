import React from 'react'
import {useForm} from 'react-hook-form';

type LoginVals = {
 fName: string;
 lName: string;
 email: string;
 gender: string;
 accept: string
}

const Detail = () => {
    const {register, handleSubmit, formState: {errors} } = useForm<LoginVals>();


    return (
        <form 
        onSubmit={handleSubmit((data) => {
            console.log(data)
        })}
        >
        <label htmlFor='fName'>Name:</label>
        <input {...register('fName', {required:true} )} id='fName' placeholder='Name' />
        <label htmlFor='lName'>Surname:</label>
        <input {...register('lName')} id='lName' placeholder='Surname' />

        <label htmlFor='email'>email:</label>
        <input {...register('email')} id='email' placeholder='email' />



        <label htmlFor='gender'>gender:</label>
        <select {...register('gender')} id='gender'> 
        <option value='male'>male</option> 
        <option value='female'>female</option>
        </select> 

        <label htmlFor='accept'>accept:</label>
        <input type='checkbox' {...register('accept')} id='accept' />

        </form>
    ) 
}

export default Detail
