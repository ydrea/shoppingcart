import {useState} from 'react';
import {useQuery} from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
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

  return (
    <div>
      <div>
        alo
      </div>
    </div>
  );
}

export default App;
