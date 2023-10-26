import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringfy(action.payload))
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },
    },
});

export const {setCredentials, logout} = authSlice.actions;  //when the function is called its an action

export default authSlice.reducer; //when the state changes its a reducer
