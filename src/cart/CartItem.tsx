import React from 'react'
import { CartItemType } from './Home'
import { Wrapper } from './CartItem.style'
// import Item from './Item'
import Button from '@material-ui/core/Button'

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void
}
 const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
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