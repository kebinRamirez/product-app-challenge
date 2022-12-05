import { configureStore } from '@reduxjs/toolkit'
import PlatosReducer from './main/mainSlice'

const store = configureStore({
    reducer: {
        platos: PlatosReducer,
    },
})

export default store