import React from 'react';
import {useState, useContext, useCallback} from 'react';
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
// import { ItemsContext, itemsContextDefaultValue } from './context/ItemsContext';
// import {CartItemType} from './types/items'
// import Header from './components/Header';

import {CartItemType} from './types/workshops'
import { useAppData, AppDataType } from "./context/AContext";
//donesi 
//
const getProducts = async () : Promise <CartItemType[]> => 
await (await fetch ('http://localhost:8000/workshops')).json();


export default function App() {
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


//prebroj
 const getTotalItems = (cartItems: any) => cartItems.reduce((acc: number, item: any) => acc + item.quantity, 0);

 //ubij
 const handleRemoveFromCart = (id: number) => {
  setCartItems(prev => 
    prev.reduce((ack, item) => {
      if (item.id === id) {
        if (item.quantity === 1) return ack;
        return [...ack, {...item, quantity: item.quantity -1}]
      } else {
        return [...ack, item]
      }
    }, [] as CartItemType[])
  )
};

// //dodaj
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




  return (
    
      // {/* <Header /> 0
    <Router>
      <Home /> 
    </Router>
  );
}


