import {useContext} from 'react'
import Acontext from '../types/store'

export default function PostCons() {

    const state = useContext(Acontext)
    return (
        <div>
            {state.f} {state.l}
        </div>
    )
}
