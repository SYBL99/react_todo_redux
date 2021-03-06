import { createSlice } from '@reduxjs/toolkit'

export const controlToDo = createSlice({
    name: 'toDo',
    initialState: {
        value: [{'ัะตัั': true}],
    },
    reducers: {
        setToDo: (state, newState) => {
            state.value = newState.payload
        },
    },
})

export const { setToDo } = controlToDo.actions

export default controlToDo.reducer