import React from 'react';
import {useState, useContext, useCallback} from 'react';
import {useQuery} from 'react-query';

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
// import Home from './components/Home';
import { ItemsContext, itemsContextDefaultValue } from './context/ItemsContext';
import {CartItemType} from './types/items'
// import Header from './components/Header';
import { PostsList } from './components/PostsList';
import Post from './components/Post';



export default function App() {





  return (
    <ItemsContext.Provider value={itemsContextDefaultValue}>
      
      {/* <Header /> */}
    <Router>
      <PostsList />
      <Post />
      {/* <Home /> */}
    </Router>
    </ItemsContext.Provider>
  );
}


