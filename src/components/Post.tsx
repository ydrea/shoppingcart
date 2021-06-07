import {useState} from 'react'
import Acontext, {Astate} from '../types/store'
import PostCons from './PostCons'

export default function Post() {
    const [state, stateSet] = useState<Astate>({
f: 'ovo...',
l: 'ono'
    })


    return (
        <Acontext.Provider value={state}>
<PostCons />
        </Acontext.Provider>
    )
}
