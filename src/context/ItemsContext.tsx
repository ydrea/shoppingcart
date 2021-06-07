import { createContext, useState } from 'react'
import {CartItemType} from '../types/items'
import {useQuery} from 'react-query'
import LinearProgress from '@material-ui/core/LinearProgress';

//donesi
//
const getProducts = async () : Promise <CartItemType[]> => 
await (await fetch ('http://localhost:8000/workshops')).json();
//
const {data, isLoading, error} = useQuery <CartItemType[]> ('stvari', getProducts); 
console.log(data);

 
//provjeri 
const checkIt = () => { 
if (isLoading) return <LinearProgress/>
if (error) return <div> Greška </div>
}


  //postavi
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

//prebroj
const getTotalItems = (cartItems: any) => cartItems.reduce((acc: number, item: any) => acc + item.quantity, 0);


 //ubij
 const handleRemoveFromCart = (id: number) => {
  setCartItems(prev => 
    prev.reduce((ack, item) => {
      if (item.id === id) {
        if (item.quantity === 1) return ack;
        return [...ack, {...item, quantity: item.quantity -1}]
      } else {
        return [...ack, item]
      }
    }, [] as CartItemType[])
  )
};

//dodaj
const handleAddToCart = (clickedItem: CartItemType) => {
  setCartItems(prev => {
    let isItIn = prev.find(item => clickedItem.id === item.id)
    if (isItIn) {
      return prev.map(item => 
        item.id === clickedItem.id ?
        {...item, quantity: item.quantity + 1} : item        
        ) 
    }
    return [...prev, {...clickedItem, quantity: 1 }]
  });
};


// interface CartItemType {
//     id: number,
//     title: string,
// }

export interface CITData {
    cartItems: CartItemType[];
    setCartItems: () => void;
    isLoading: boolean;
    getProducts: () => void;
    addToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void; 
    // setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>; 
}

export const itemsContextDefaultValue: CITData = {
    cartItems: [],
    setCartItems: () => null,
    isLoading: false,
    getProducts: () => null,
    addToCart: (clickedItem: CartItemType) => null,
    handleRemoveFromCart: (id: number) => null,
    // setCartItems: (SetStateAction: CartItemType) => null
}
export const ItemsContext = createContext<CITData>(itemsContextDefaultValue);