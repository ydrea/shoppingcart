import CartItem from './CartItem'
import {Wrapper} from './Cart.style'
import { CartItemType } from '../../types/items';

const Cart: React.FC<any> = ({props}) => {

// const calcTotal = (items: CartItemType[]) => 
    // console.log(items);
    // items.reduce((acc: number, item) => acc + item.quantity * item.price, 0);

    return (
        <Wrapper>
            <h3> Your shopping cart </h3>
            {CartItem.length === 0 ? <p>prazna košarica</p> : null}

            {/* {CartItem.map((_item: any) => (
                <CartItem />
            ) ) }
            <h3> Total: {calcTotal(cartItem)} </h3> */}
        </Wrapper>
    )
}
export default Cart;