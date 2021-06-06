
import {Link, Switch, Route} from 'react-router-dom';

import Checkout from '../routes/Checkout';
import SimpleModal from '../routes/Modal'
import Home from '../routes/Home';
import Login from '../routes/Login';

const Nav = () => {
    return (
        <div>
            <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
            </ul>

        <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/checkout' component={Checkout} />
        </Switch>
        </div>
    )
}

export default Nav;
