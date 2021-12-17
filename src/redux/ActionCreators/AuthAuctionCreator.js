import * as types from "../types/AuthTypes";

// Set auth action

const setUser = (data)=>({
    type: types.SET_USER,
    payload:data
});

// Create auth action
export const loginUser = data => dispatch =>{
    dispatch(setUser(data));
};