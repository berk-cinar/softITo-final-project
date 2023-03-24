import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import cartReducer from "../features/cartSlice";

const store = configureStore ({
        reducer:{
                allCart : cartReducer,
                user:authSlice,
        },
});

export default store;