import { createContext, useContext, useReducer } from 'react'
import { ToggleButton } from 'react-bootstrap'

const initialState = {
    expanded : false,
    navbar : {
        expanded : false
    }
}



const reducer = (state, data) => {
    console.log('reducer==>', state);
    console.log('reducer==>',data);

    switch (data.action) {
        case 'TOGGLE_NAVBAR':
            return {
                ...state,
                navbar  : {
                    expanded : data.payload.expanded
                }
            }
            break;
    
        default:
            break;
    }
    return state
} 
//   

///
export const actions =  {
    ToggleNavbar(expanded) {
        return {
            action : 'TOGGLE_NAVBAR',
            payload : { expanded }
        }
    }
}

export const Context = createContext(initialState)
//Component
export const ContextProvider = (props) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{value, dispatch}}>{props.children}</Context.Provider>
    )
}

