import { configureStore } from '@reduxjs/toolkit'
import controlToDoReducer from './controlToDo'

export default configureStore({
    reducer: {
        setToDo: controlToDoReducer,
    },
})