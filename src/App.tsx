import {useState} from 'react';
import {useQuery} from 'react-query';

import Header from './components/Header';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import Item from './components/Item'
import Image from './components/Image'
// styles
import {Wrapper} from './App.styles'

//router
import {
  Switch, Route, Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Checkout from './components/Checkout';


const App = () => {

  return (
    <Wrapper>

    <Router>
      <Route path='/checkout' component={Checkout} />
    </Router>
    </Wrapper>
  );
}

export default App;
