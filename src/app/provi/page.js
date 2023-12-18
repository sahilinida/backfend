
'use client'

import store from '@/app/store/page'
import { Provider } from 'react-redux'


export default function provi({children}){
    return <Provider store={store}>


        {children}
    </Provider>
}