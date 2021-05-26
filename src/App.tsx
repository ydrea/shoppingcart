import {useState} from 'react';
import {useQuery} from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Item from './components/Item'
import Cart from './components/Cart'
// styles
import {Wrapper} from './App.styles'
import { Button } from '@material-ui/core';

export type CartItemType = {
  id: number;
  title: string;
  desc: string;
  price: number;
  date: string;
  categoty: string;
  userId: number;
  imageUrl: string
  quantity: number
}

const getProducts = async () : Promise <CartItemType[]> => 
await (await fetch ('http://localhost:8000/workshops')).json();


const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
const [cartItems, setCartItems] = useState([] as CartItemType[]) 

  const {data, isLoading, error} = useQuery <CartItemType[]> ('stvari', getProducts); 
  console.log(data);

  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.price, 0);

const handleAddToCart = (clickedItem: CartItemType) => {
  setCartItems(prev => {
    let isItIn = prev.find(item => clickedItem.id === item.id)
    if (isItIn) {
      return prev.map(item => 
        item.id === clickedItem.id ?
        {...item, quantity: item.quantity + 1} : item        
        ) 
    }
    return [...prev, {...clickedItem, quantity: 1 }]
  });
};

const handleRemoveFromCart = () => null;
  
if (isLoading) return <LinearProgress/>
if (error) return <div> Greška </div>

  return (
    <Wrapper> 
      <Drawer anchor='left' open={cartOpen} onClose={()=> setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} 
        removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Button onClick={()=>setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
<AddShoppingCartIcon />

        </Badge>
      </Button>
      <Grid container spacing = {3}>
        {data?.map(item => ( 
          <Grid item key={item.id} xs={12} sm={4}> 
<Item item={item} handleAddToCart={handleAddToCart} />
        </Grid>
        ) ) }
      <div>
      <div>
        alo
      </div>
    </div>
    </Grid>
    </Wrapper>
   
  );
}

export default App;
