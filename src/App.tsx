import React from 'react';
import {useState, useContext, useReducer } from 'react';
import {useQuery} from 'react-query';
import LinearProgress from '@material-ui/core/LinearProgress';

// import Header from './components/Header';
// import Grid from '@material-ui/core/Grid';

// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
// import Item from './components/Item'
// import Image from './components/Image'
// styles
// import {Wrapper} from './App.styles'

// //router
import {
  Switch, Route, Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
//context
import {CartItemType} from './types/workshops'
import { CartContextProvider, cartReducer, initialCartState } from "./context/CartContext";
import Header from './cart/Header';
//donesi 
//
const getProducts = async () : Promise <CartItemType[]> => 
await (await fetch ('http://localhost:8000/workshops')).json();



export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

    const cartContextValues = {
        cartState,
        cartDispatch
    }

  //postavi
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  //
const {data, isLoading, error} = useQuery <CartItemType[]> ('workshopa', getProducts); 
console.log(data);
 
//provjeri 
const checkIt = () => { 
if (isLoading) return <LinearProgress/>
if (error) return <div> Greška </div>
}


return (
  <CartContextProvider value={cartContextValues}>
    <Header />
      <Router>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
          </Switch>
      </Router>
  </CartContextProvider>
);
}

export default Application;