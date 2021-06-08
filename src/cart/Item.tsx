import Button from '@material-ui/core/Button'
//context
import {CartItemType} from '../types/workshops'
import {cartReducer} from "../context/CartContext";

//styles
import {Wrapper} from './Item.style'

export type ItemProps = {
    item: CartItemType,
    cartContext: any 
}

const Item: React.FC<ItemProps> = ({ item, cartContext }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <p> {item.desc} </p>
        </div>
        <Button onClick={() => cartContext.cartDispatch({ type: 'add_item', payload: item })}> Add to cart </Button>
        </Wrapper>
    )

    export default Item;