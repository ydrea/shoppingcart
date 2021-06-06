import {createContext} from 'react'
import {CartItemType} from '../types/items'

export interface CartItemTypeProps {
    items: {[key: string]: CartItemType[]};
    updateItems: (items: {[key: string]: CartItemType[]}) => void;
}

const CartItemContext = createContext<CartItemTypeProps>({
    items: {},
    updateItems: (items: {[key: string]: CartItemType[]}) => {}  
});

export const CartItemContextConsumer = CartItemContext.Consumer
export const CartItemContextProvider = CartItemContext.Provider
export default CartItemContext
