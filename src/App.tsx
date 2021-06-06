import {useState} from 'react';
// import {useQuery} from 'react-query';
import Header from './components/header/Header';
// import Grid from '@material-ui/core/Grid';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
// import Item from './components/cart/Item'
// import Image from './assets/Image'

import {Wrapper} from './App.styles'

//router
import {
  Switch, Route, Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from './components/routes/Home';
// import { UsersTypeProps } from './context/UserContext';

//types
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



const App = () => {
// const [users, setUsers] = useState<{[key: string]: UsersTypeProps[]}>({}) 

const [cartItems, cartItemsSet] = useState([] as CartItemType[]);



const handleAddToCart = (clickedItem: CartItemType) => {
  cartItemsSet(prev => {
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

  return (
<Wrapper>

<Paper >
        <TableHead className='head'> 
         <TableRow> 
          <TableCell>

          <Header addToCart={handleAddToCart} cartItems={cartItems} cartItemsSet={cartItemsSet} />
          </TableCell>
         </TableRow>
      </TableHead> 

        <TableBody>
         <TableRow> 
    <Router>
    <Home addToCart={handleAddToCart} 
    cartItems={cartItems} 
    setCartItems={cartItemsSet} 
    />
    </Router>
      </TableRow>
        </TableBody>
      </Paper>
</Wrapper>
  );
}

export default App;
