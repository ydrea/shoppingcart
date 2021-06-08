import CartItem from './CartItem'
import {Wrapper} from './Cart.style'
//context
import {CartItemType} from '../types/workshops'
import CartContext, {cartReducer} from "../context/CartContext";
import {useState, useContext} from 'react';

export interface ICartItemComponentProps {
    item: CartItemType;
    quantity: number;
}

const Cart: React.FunctionComponent<ICartItemComponentProps> = (props) => {
    const { item, quantity } = props;
    const cartContext = useContext(CartContext);

const calcTotal = (items: CartItemType[]) => 
    // console.log(items);
    items.reduce((acc: number, item) => acc + item.quantity * item.price, 0);

    return (
        <Wrapper>
            <h3> Your shopping cart </h3>
            {item.map(it => (
                <CartItem cartContext={cartContext}
                key={it.id}
                item={item}
                />
            ) ) }
            {/* <h3> Total: {calcTotal(items)} </h3> */}
        </Wrapper>
    )
}
export default Cart;