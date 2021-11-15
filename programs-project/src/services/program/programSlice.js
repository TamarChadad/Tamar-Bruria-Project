import { createSlice } from '@reduxjs/toolkit'

export const programsSlice = createSlice({
    name: 'programs',
    initialState: {
        programs:[]
    },
    reducers: {
        setPrograms: (state, action) => {
            state.programs = action.payload;
            console.log("i am in reducer")
        },

        clearPrograms: (state) => {
            state.programs = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPrograms } = programsSlice.actions

export default programsSlice.reducer