import {useState, useContext} from 'react';
import {useQuery} from 'react-query';

import Header from '../cart/Header';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import Item from '../cart/Item'
import Image from '../assets/Image'
// styles
import {Wrapper} from '../App.styles'

//context
import {CartItemType} from '../types/workshops'
import CartContext from "../context/CartContext";

export interface HomeProps {
data: CartItemType
} 

const Home: React.FC <HomeProps> = (props) => {

    const { data } = props;
    const cartContext = useContext(CartContext);
  
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
            <Item item={item} cartContext={cartContext} />
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
