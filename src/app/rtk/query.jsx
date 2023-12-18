

import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

 export const rtkapi=createApi({
    reducerPath:'rtk',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5050/'}),
    endpoints:(builder)=>({
        Getapi:builder.query({
            query:()=>'/rtk'
        }),
        postapi:builder.mutation({
          query:(payload)=>({
            url:'/',
            method:POST,
            body:{payload},
            headers:{
                'Content-type':'application/json:charset=UTF-8',
                
            },
          }),
         
            
        })
    }),
})
export const {useGetapiQuery,usePostapiMutation}=rtkapi