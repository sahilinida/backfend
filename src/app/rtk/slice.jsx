'use client'
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const init={
  sta:[]
}

 const Slicee= createSlice({
    name:'Slicee',
    initialState:init,
      reducers:{
        inc:(state,action)=>{
          state.sta.push(action.payload)
            console.log(action.payload)
          toast.success('run this '+action.payload)
            console.log(state.sta)
        }
      }
 })

 export const{inc}=Slicee.actions;
 export default Slicee.reducer