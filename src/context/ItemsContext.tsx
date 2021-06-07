import { createContext } from 'react'
import {CartItemType} from '../types/items'

export interface CITData {
    items: CartItemType[]
}
export const itemsContextDefaultValue: CITData = {
    items: []
}
export const CITContext = createContext<CITData>(itemsContextDefaultValue)