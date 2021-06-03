
import { Action } from "./actions"


export type FormState = {
    imena: string[]
}



const initState = {
    imena: []
}

export const FormReducer = (state: FormState = initState, action: Action) => {
switch (action.type) {
   case 'ADD': {
        return {...state, imena: [...state.imena, action.payload]}
    }
    default:
    return state
} 
}