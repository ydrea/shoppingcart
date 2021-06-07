import {useState, useContext} from 'react';
import {useQuery} from 'react-query';

import Header from './Header';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import Item from './Item'
import Image from './Image'
// styles
import {Wrapper} from '../App.styles'

//router
import {
  Switch, Route, Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Checkout from './Checkout';
import { CITContext } from '../context/ItemsContext';

// export type CartItemType = {
//   id: number;
//   title: string;
//   desc: string;
//   price: number;
//   date: string;
//   categoty: string;
//   userId: number;
//   imageUrl: string
//   quantity: number
// }

// const getProducts = async () : Promise <CartItemType[]> => 
// await (await fetch ('http://localhost:8000/workshops')).json();


const Home = () => {

  const {cartItems} = useContext(CITContext)
  console.log ({'C': cartItems});
  
  

  return (
    <Wrapper>
      <Paper >
        <TableHead className='head'> 
         <TableRow> 
          <TableCell>
            
          </TableCell>
         </TableRow>
      </TableHead> 
        <TableBody>
         <TableRow> 
     `     <Grid container spacing = {3}>
        {data?.map(item => ( 
          <Grid item key={item.id} xs={12} sm={4}> 
          <Image />
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ) ) }
             </Grid>
          </TableRow>
        </TableBody>
      </Paper>
    </Wrapper>
  );
}

export default Home;
