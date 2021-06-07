import { createContext, useState, useContext } from 'react'
import {CartItemType} from '../types/workshops'

export type AppDataType = {
  cartItems: CartItemType | undefined;
  cartItemsSet: (cartItems: CartItemType) => void;
};

export const AppData = createContext<AppDataType>(undefined!);


export function AppDataProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, cartItemsSet] = useState<CartItemType | undefined>(undefined);
  return (
    <AppData.Provider value={{ cartItems, cartItemsSet }}>{children}</AppData.Provider>
  );
}

export const useAppData = () => useContext(AppData);