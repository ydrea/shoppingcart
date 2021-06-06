import { type } from 'os'
import {createContext} from 'react'
import {FormVals} from '../types/form'

const initState = {
    f: 'alo',
    l: 'medo'
}

export type TestState = typeof initState

export const contextTest = createContext <typeof initState> (initState)