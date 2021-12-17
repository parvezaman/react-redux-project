import * as types from "../types/AuthTypes";

// Set auth action

const setUser = (data)=>({
    type: types.SET_USER,
    payload:data
});
const resetUser = ()=>({
    type: types.RESET_USER
});

// Create auth action
export const loginUser = data => dispatch =>{
    dispatch(setUser(data));
};
export const logOutUser = () => dispatch =>{
    dispatch(resetUser());
};