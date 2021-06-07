import {useContext} from 'react'
import { ItemsContext } from '../context/ItemsContext';

export const PostsList = () => {
    const { cartItems } = useContext(ItemsContext);
    console.log(cartItems);
    
    return (
      // <ItemsContext.Consumer>
      <p> 
      3 meda
      </p>
          
      // </ItemsContext.Consumer> 
      
    )
  }