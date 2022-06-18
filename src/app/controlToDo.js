import { createSlice } from '@reduxjs/toolkit'

export const controlToDo = createSlice({
    name: 'toDo',
    initialState: {
        value: [{'тест': true}],
    },
    reducers: {
        setToDo: (state, newState) => {
            state.value = newState.payload
        },
    },
})

export const { setToDo } = controlToDo.actions

export default controlToDo.reducer