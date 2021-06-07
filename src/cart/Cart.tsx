import CartItem from './CartItem'
import {Wrapper} from './Cart.style'

const Cart 
: React.FC = ({cartItems, addToCart, removeFromCart}) => {

const calcTotal = (items: CartItemType[]) => 
    // console.log(items);
    items.reduce((acc: number, item) => acc + item.quantity * item.price, 0);

    return (
        <Wrapper>
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
        </Wrapper>
    )
}
export default Cart;