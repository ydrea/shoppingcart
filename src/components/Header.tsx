import {useState} from 'react';

import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from '@material-ui/core';
import Cart from './Cart'

import {CartItemType} from '../App'

import Logic from './Logo'
import { Wrapper } from './Header.style';

import CheckoutForm from './CheckoutForm';

type Props = {
    cartItems: CartItemType[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>; 
    addToCart: (clickedItem: CartItemType) => void;

    // handleRemoveFromCart: (id: number) => void; 
};
const Header: React.FC<Props> = ({addToCart, setCartItems, cartItems}) => {
  const [cartOpen, setCartOpen] = useState(false);

//   const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const getTotalItems = (items: CartItemType[]) => items.reduce((acc: number, item) => acc + item.quantity, 0);

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => 
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, {...item, quantity: item.quantity -1}]
        } else {
          return [...ack, item]
        }
      }, [] as CartItemType[])
    )
  };
  

    return (
      <Wrapper>
        <header className='header'>

      <CheckoutForm />
        <Logic />
      <Drawer anchor='left' open={cartOpen} onClose={()=> setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={addToCart} 
        removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Button className='cart-button' onClick={()=>setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon/>
        </Badge>
      </Button>
      </header>
      </Wrapper>

    )
}

export default Header
