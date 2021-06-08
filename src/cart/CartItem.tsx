
import { Wrapper } from './CartItem.style'
// import Item from './Item'
import Button from '@material-ui/core/Button'
//context
import {CartItemType} from '../types/workshops'
import {cartReducer} from "../context/CartContext";


type Props = {
    item: CartItemType,
    cartContext: any 

}
 const CartItem: React.FC<Props> = ({item, cartContext}) => {
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
                onClick={() => cartContext.cartDispatch({ type: 'remove_item', payload: item })}> - </Button>  
                <p> {item.price} </p>
                <Button 
                size='small'
                variant='contained'
                onClick={() => cartContext.cartDispatch({type: 'add_item', payload: item})}> + </Button>  
                 </div>
            </div>
        </Wrapper>
    )
}

export default CartItem