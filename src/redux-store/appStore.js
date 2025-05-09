import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import restroReducer from './restroSlice'
import userReducer from './userSlice'
const appStore = configureStore({
    reducer:{
        cart : cartReducer, 
        restro: restroReducer,
        user: userReducer,  


    }
})

export default appStore;