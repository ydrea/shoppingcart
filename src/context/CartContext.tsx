import { createContext } from 'react';
import {CartItemType} from '../types/workshops';

export const initialCartState: ICartState = {
    items: {}
};

export interface ICartActions {
    type: 'add_item' | 'remove_item';
    payload: CartItemType;
}

export interface ICartState {
    items: { [key: string]: CartItemType[] };
}

export const cartReducer = (state: ICartState, action: ICartActions) => {
    let item = action.payload;
    let items = { ...state.items };

    switch (action.type) {
        case 'add_item':
            if (items[item.id]) {
                items[item.id].push(item);
            } else {
                items[item.id] = [item];
            }

            return { ...state, items };
        case 'remove_item':
            items[item.id].pop();

            if (items[item.id].length === 0) delete items[item.id];

            return { ...state, items };
        default:
            return state;
    }
};

export interface ICartContextProps {
    cartState: ICartState;
    cartDispatch: React.Dispatch<ICartActions>;
}

const CartContext = createContext<ICartContextProps>({
    cartState: initialCartState,
    cartDispatch: () => {}
});

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;
export default CartContext;