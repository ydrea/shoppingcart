import {useState} from 'react';
import {useQuery} from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Item from './components/Item'
// styles
import {Wrapper} from './App.styles'

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
  const {data, isLoading, error} = useQuery <CartItemType[]> ('stvari', getProducts); 
  console.log(data);

  const getTotalItems = () => null;

const handleAddToCart = () => null;

const handleRemoveFromCart = () => null;
  
if (isLoading) return <LinearProgress/>
if (error) return <div> Greska </div>

  return (
    <Wrapper> 
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
