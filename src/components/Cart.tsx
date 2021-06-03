import CartItem from './CartItem'

import {Wrapper} from './Cart.style'

import {CartItemType} from '../App'
import { Button } from '@material-ui/core';
import Header from './Header';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void; 
    // setCartItems;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {


    const onCheckout = () => null

const calcTotal = (items: CartItemType[]) => 
    // console.log(items);
    items.reduce((acc: number, item) => acc + item.quantity * item.price, 0);


    return (
        <Wrapper>      
        {/* <Header addToCart={addToCart} cartItems={cartItems} 
        setCartItems={setCartItems} 
        /> */}
            <h3> Your shopping cart </h3>
            {cartItems.length === 0 ? <p>prazna košarica</p> : null}
            {cartItems.map(item => (
                <CartItem 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
            ) ) }
            <h3> Total: {calcTotal(cartItems)} </h3>

            <Button 
            onClick = {onCheckout}
            >Checkout</Button>
        </Wrapper>
    )
}
export default Cart;