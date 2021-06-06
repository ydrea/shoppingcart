import React from 'react'
import { Wrapper } from './CartItem.style'
import Button from '@material-ui/core/Button'


 const CartItem: React.FC<any> = ({item}) => {
    return (
        <Wrapper>
            <div>
                <h3> {item.title} </h3>
                <div>
                    <p>Price: {item.price}</p>
                    <p>Total: {(item.price * item.quantity).toFixed(2)} </p>
                </div>
                <div className='buttons'>
                <Button 
                size='small'
                variant='contained'
                onClick={() => removeFromCart(item.id)}> - </Button>  
                <p> {item.price} </p>
                <Button 
                size='small'
                variant='contained'
                onClick={() => addToCart(item)}> + </Button>  
                 </div>
            </div>
        </Wrapper>
    )
}

export default CartItem

function removeFromCart(id: any): void {
    throw new Error('Function not implemented.')
}


function addToCart(item: any): void {
    throw new Error('Function not implemented.')
}
