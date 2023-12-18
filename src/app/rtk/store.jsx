'use client'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import Slicee from "./slice";
import { rtkapi } from "./query";
import { setupListeners } from "@reduxjs/toolkit/query";




const store=configureStore({
         reducer:{
            data:Slicee,
            [rtkapi.reducerPath]:rtkapi.reducer,
         },
         middleware:(getDefaultMiddleware)=>
         getDefaultMiddleware().concat(rtkapi.middleware),
         
})
setupListeners(store.dispatch)

export default store;