import { configureStore } from "@reduxjs/toolkit";
import { getcartReducer } from "./slices/cartSlice";


export const store = configureStore
    ({
        reducer: {
            cart: getcartReducer,
        }
    })