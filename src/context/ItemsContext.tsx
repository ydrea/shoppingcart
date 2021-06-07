import { createContext, useState } from 'react'
import {CartItemType} from '../types/workshops'
import {useQuery} from 'react-query'



// interface 
export interface CITData {
  cartItems: CartItemType[] | undefined;
  itemsSet: (items: CartItemType) => void;
    isLoading: boolean;
    getProducts: () => void;
    addToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void; 
}

export const itemsContextDefaultValue: CITData = {
    cartItems: [],
    itemsSet: () => null,
    isLoading: false,
    getProducts: () => null,
    addToCart: (clickedItem: CartItemType) => null,
    handleRemoveFromCart: (id: number) => null,
}
export const ItemsContext = createContext<CITData>(itemsContextDefaultValue);