import { createContext } from 'react';
import {CartItemType} from '../types/workshops'

export interface ICartProps {
    items: { [key: string]: CartItemType[] };
    updateItems: (items: { [key: string]: CartItemType[] }) => void;
}

const CartContext = createContext<ICartProps>({
    items: {},
    updateItems: (items: { [key: string]: CartItemType[] }) => {}
});

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;
export default CartContext;