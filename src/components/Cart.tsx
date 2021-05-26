import CartItem from './CartItem'

import {Wrapper} from './Cart.style'

import {CartItemType} from '../App'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void; 
};

const Cart : React.FC<Props> = ({
    cartItems, addToCart, removeFromCart
}) => {
    return (
        <Wrapper>
            <h2> Vaša košarica </h2>
            {cartItems.length === 0 ? <p>prazna košarica</p> : null}
            {cartItems.map(item => (
                <CartItem 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
            ) ) }
        </Wrapper>
    )
}
export default Cart;