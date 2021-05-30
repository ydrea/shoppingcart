import {useState} from 'react';
import {useQuery} from 'react-query';

import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import Item from './components/Item'
// styles
import {Wrapper} from './App.styles'
import Header from './components/Header';

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
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const {data, isLoading, error} = useQuery <CartItemType[]> ('stvari', getProducts); 
  console.log(data);


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

  
if (isLoading) return <LinearProgress/>
if (error) return <div> Greška </div>

  return (
    <Wrapper> 
      <Header addToCart={handleAddToCart} cartItems={cartItems} setCartItems={setCartItems} />
    
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
