import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import restroReducer from './restroSlice'
import userReducer from './userSlice'
import sidebarReducer from './sidebarSlice'

const appStore = configureStore({
    reducer:{
        cart : cartReducer, 
        restro: restroReducer,
        user: userReducer,  

        sidebar: sidebarReducer
    }
})

export default appStore;