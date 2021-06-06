import {createContext} from 'react'
import UsersType from '../types/user'

export interface UsersTypeProps {
    users: {[key: string]: UsersType[]};
    updateUsers: (users: {[key: string]: UsersType}) => void;
}

const UsersContext = createContext<UsersTypeProps>({
    users: {},
    updateUsers: (users: {[key: string]: UsersType}) => {}  
});

export const UsersContextConsumer = UsersContext.Consumer
export const UsersContextProvider = UsersContext.Provider
export default UsersContext
