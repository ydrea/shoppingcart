import {useState} from 'react';

import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from '@material-ui/core';
import Cart from '../cart/Cart'

//context
import {useContext} from 'react'
import CartItemContext from '../../context/ItemsContext'

import Logic from '../../assets/Logo';
import { Wrapper } from './Header.style';
import { CartItemType } from '../../types/items';

//router
// import Nav from './Nav';


const Header: React.FC<any> = ({props}) => {

  const [cartOpen, cartOpenSet] = useState(false);


  const getTotalItems = (items: CartItemType[]) => items.reduce((acc: number, item) => acc + item.quantity, 0);

  const handleRemoveFromCart = (id: number) => {
    itemsSet((prev: any[]) => 
      prev.reduce((acc: any, item: { id: number; quantity: number; }) => {
        if (item.id === id) {
          if (item.quantity === 1) return acc;
          return [...acc, {...item, quantity: item.quantity -1}]
        } else {
          return [...acc, item]
        }
      }, [] as CartItemType[])
    )
  };
  

    return (
      <Wrapper>
         <header className='header'>
        <Logic />
        {/* <Nav /> */}
      <Drawer anchor='left' open={cartOpen} onClose={()=> cartOpenSet(false)}>
        <Cart removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Button className='cart-button' onClick={()=>cartOpenSet(true)}>
        {/* <Badge badgeContent={getTotalItems(cartItems)} color='error'> */}
          <AddShoppingCartIcon/>
        {/* </Badge> */}
      </Button>
      </header>
      </Wrapper>

    )
}

export default Header
function itemsSet(arg0: (prev: any[]) => any) {
  throw new Error('Function not implemented.');
}

function cartItems(cartItems: any): import("react").ReactNode {
  throw new Error('Function not implemented.');
}

