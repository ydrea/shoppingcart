import CartItem from './CartItem'
import {Wrapper} from './Cart.style'
import {CartItemType} from './Home'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void; 
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {

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