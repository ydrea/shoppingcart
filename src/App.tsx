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
import { CartItemContextProvider } from './context/ItemsContext';
import {CartItemType} from './types/items'
//types

const App = () => {

// const [cartItems, cartItemsSet] = useState([] as CartItemType[]);

const [items, itemsSet] = useState<{[key: string]: CartItemType[]}>({})

const updateItems = (_items: {[key: string]: CartItemType[]} ) => {
  itemsSet(_items)
}

const contextVals = {
  items,
  updateItems
}

  return (
    <CartItemContextProvider value={contextVals}> 
<Wrapper>

<Paper >

        <TableHead className='head'> 
         <TableRow> 
          <TableCell>

          <Header />
          </TableCell>
         </TableRow>
      </TableHead> 

        <TableBody>
         <TableRow> 
    <Router>
    <Home />
    </Router>
      </TableRow>
        </TableBody>
      </Paper>
</Wrapper>
</CartItemContextProvider>

  );
}

export default App;
