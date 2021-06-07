import {createContext} from 'react'

export interface Astate {
    f: string;
    l: string
};

export const DefaultVal = {
f: '',
l: ''
}

const context = createContext<Astate>(DefaultVal);

// export type Astate = typeof initState

export default context;
