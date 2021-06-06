import {useQuery} from 'react-query';

import {CartItemType} from '../../types/items'
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

//context
import {useContext} from 'react'
import CartItemContext from '../../context/ItemsContext'

//children
import Item from '../cart/Item'
import Image from '../../assets/Image'
// styles
import {Wrapper} from '../../App.styles'

//route

  const Home : React.FC<any> = ({props}) => {

    const getProducts = async () : Promise <CartItemType[]> => 
    await (await fetch ('http://localhost:8000/workshops')).json();
    
    const {data, isLoading, error} = useQuery <CartItemType[]> ('stvari', getProducts); 
    console.log(data);

  if (isLoading) return <LinearProgress/>
  if (error) return <div> Greška </div>

const handleAddToCart = (clickedItem: CartItemType) => {
  itemsSet(prev => {
    let isItIn = prev.find((item: { id: number; }) => clickedItem.id === item.id)
    if (isItIn) {
      return prev.map((item: { id: number; quantity: number; }) => 
        item.id === clickedItem.id ?
        {...item, quantity: item.quantity + 1} : item        
        ) 
    }
    return [...prev, {...clickedItem, quantity: 1 }]
  });
};

  return (
    <Wrapper>
          <Grid container spacing = {3}>
        {data?.map(item => ( 
          <Grid item key={item.id} xs={12} sm={4}> 
          <Image />
            <Item item={item} />
          </Grid>
        ) ) }
             </Grid>
    </Wrapper>
  );
}

export default Home;
function itemsSet(arg0: (prev: any) => any) {
  throw new Error('Function not implemented.');
}

