import incdecReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'

export default  configureStore({
    reducer: {
        number: incdecReducer
    }
})