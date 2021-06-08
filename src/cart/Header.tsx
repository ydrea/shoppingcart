import {useState, useContext, useEffect} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from '@material-ui/core';
import Cart from './Cart';
import Logic from '../assets/Logo';
import { Wrapper } from './Header.style';
//router
import Nav from '../routes/Nav';
//context
import CartContext from '../context/CartContext';


// type Props = {
//   setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>; 
//   };

const Header : React.FunctionComponent = props => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const cartContext = useContext(CartContext);

  useEffect(() => {
      let _count = 0;

      for (let key in cartContext.cartState.items)
          _count += cartContext.cartState.items[key].length;

      if (_count === count) return;

      setCount(_count);
  }, [cartContext]);



    return (
      <Wrapper>
         <header className='header'>
        <Logic />
        <Nav />
      <Drawer anchor='left' open={cartOpen} onClose={()=> setCartOpen(false)}>
        {/* <Cart item={item} quantity={quantity} />  */}
      </Drawer>
      <Button className='cart-button' onClick={()=>setCartOpen(true)}>
      {count > 0 &&
        <Badge>{count}
           <AddShoppingCartIcon/>
        </Badge>}
      </Button>
      </header>
      </Wrapper>
    )
}

export default Header
