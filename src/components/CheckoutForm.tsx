import { Button } from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {FormState} from '../redux/FormReducer'
import {addIme} from '../redux/actions'
import { CheckoutFormInput } from './CheckoutFormInput'

// type FormProps = {
//     addIme(ime: string): void;
// } 

const CheckoutForm =() => {

    // const [ime, setIme] = useState('')
    // const updateIme = (evt:ChangeEvent<HTMLInputElement>) => {
    //     setIme(evt.target.value)
    // }
    
const imena = useSelector<FormState, FormState['imena']>((state) => state.imena)


const dispatch = useDispatch();

const onAddIme = (ime: string) => {
  dispatch(addIme(ime));
};


// const onConfirmClick = () => {
//         addIme(ime)
//     }

return (
        <div>
            <CheckoutFormInput addIme={onAddIme}/>
      <ul>
        {imena.map((ime) => {
          return <li key={ime}>{ime}</li>;
        })}
      </ul>
        </div>
    )
}

export default CheckoutForm