import {useState, useContext, createContext} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from '@material-ui/core';
import Cart from './Cart';
import Logic from './Logo';
import { Wrapper } from './Header.style';
//router
import Nav from './Nav';
//context
import { ItemsContext, itemsContextDefaultValue } from '../context/ItemsContext';


// type Props = {
//   setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>; 
//   };

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const {cartItems} = useContext(ItemsContext)


// const typeValues = {
//  setCartItems
// }
// const ReContext = createContext(typeValues);



    return (
      <Wrapper>
         <header className='header'>
        <Logic />
        <Nav />
      <Drawer anchor='left' open={cartOpen} onClose={()=> setCartOpen(false)}>
        {/* <Cart /> */}
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
