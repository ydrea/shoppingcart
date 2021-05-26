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
            <h2> The Shopping Cart </h2>
            {cartItems.length === 0 ? <p>prazna kosarica</p> : null}
            {cartItems.map(item => (
                <CartItem />
            ) ) }
        </Wrapper>
    )
}
export default Cart