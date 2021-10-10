import React,{createContext,useReducer} from "react";
// import { Children } from "react";
import AppReducer from './AppReducer'

const initialState = {

    transaction: []
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    function deleteBtn (id){
        dispatch({
            type:'Delete',
            payload:id
        })
    }

    function addBtn (transaction){
        dispatch({
            type:'Add',
            payload:transaction
        })
    }


return(
    <GlobalContext.Provider value={{
        transaction:state.transaction,
        deleteBtn,
        addBtn
    }}>
{children}
    </GlobalContext.Provider>
);
}