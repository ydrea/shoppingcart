import {createContext} from 'react'
import {CartItemType} from '../types/workshops'


export interface Astate {
    isLoading: boolean;
  getProducts: () => void;
  addToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void; 

};

export const DefaultVal = {
    isLoading: false,
    getProducts: () => null,
    addToCart: (clickedItem: CartItemType) => null,
    handleRemoveFromCart: (id: number) => null,
}

const context = createContext<Astate>(DefaultVal);

// export type Astate = typeof initState

export default context;
