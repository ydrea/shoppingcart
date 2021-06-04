import {useState} from 'react';
import {useQuery} from 'react-query';

import Header from './components/Header';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import Item from './components/Item'
import Image from './components/Image'
// styles
// import {Wrapper} from './App.styles'

//router
import {
  Switch, Route, Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from './components/Home';


const App = () => {

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
