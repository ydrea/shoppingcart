import {useQuery} from 'react-query';

import {CartItemType} from '../../App';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';


import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import Item from '../cart/Item'
import Image from '../../assets/Image'
// styles
import {Wrapper} from '../../App.styles'

//route


type Props = {
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>; 
  addToCart: (clickedItem: CartItemType) => void;
}


  const Home : React.FC<Props> = ({addToCart, setCartItems, cartItems}) => {

    const getProducts = async () : Promise <CartItemType[]> => 
    await (await fetch ('http://localhost:8000/workshops')).json();
    
const {data, isLoading, error} = useQuery <CartItemType[]> ('stvari', getProducts); 
console.log(data);


if (isLoading) return <LinearProgress/>
if (error) return <div> Greška </div>
  
  return (
    <Wrapper>
          <Grid container spacing = {3}>
        {data?.map(item => ( 
          <Grid item key={item.id} xs={12} sm={4}> 
          <Image />
            <Item item={item} handleAddToCart={addToCart} />
          </Grid>
        ) ) }
             </Grid>
    </Wrapper>
  );
}

export default Home;
