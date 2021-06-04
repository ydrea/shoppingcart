import React from 'react'
import Checkout from './Checkout';
import SimpleModal from './Modal'

import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <ul>
          <li>    
          <Link to='/modal' component={SimpleModal}>Modal</Link>
          </li>
          <li>
          <Link to='/checkout' component={Checkout}>Checkout</Link>
            </li>
            </ul>
        </div>
    )
}

export default Nav;
