import {createContext, useReducer} from 'react';

export const UserContext = createContext();

const initialValues = {
    loginStatus: false,
    role: "",
};

const reducer = (state, action) => {
    //action params
    const {type, payload} = action;

    switch (type) {
        case "LOGIN":
            return {
                ...state,
                loginStatus: true,
                role: payload.role
            };
        case "LOGOUT":
            return {
                ...state,
                loginStatus: false,
            }
    
        default:
            throw new Error();
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    return (
        <UserContext.Provider value={[state, dispatch]} >
            {children}
        </UserContext.Provider>
    );
} 