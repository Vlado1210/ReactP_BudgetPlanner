import { createContext, useReducer } from "react";


const AppReducer = (state,action) =>{
    switch (action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,expenses: [...state.expenses, action.payload]
            };
        case 'DELETE_ITEM':
            return{
                ...state, expenses: state.expenses.filter((expense)=>expense.id !== action.payload),
            }
        case 'CHANGE_BUDGET':
            return{
                ...state, budget:action.payload
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 2045,
    expenses: [
        {id:223,name:'tacos',cost:30},
        {id:224,name:'tamari',cost:330},
        {id:225,name:'tortas',cost:360},
        {id:226,name:'tamales',cost:308},
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) =>{

    const[state,dispatch] = useReducer(AppReducer , initialState);

    return(
        <AppContext.Provider value={{
            budget:state.budget,
            expenses: state.expenses,
            dispatch,
        }}>{props.children}</AppContext.Provider>
    )
}