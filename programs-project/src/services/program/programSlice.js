import { createSlice } from '@reduxjs/toolkit'

export const programsSlice = createSlice({
    name: 'programs',
    initialState: {
        programs:[],
        programCurrent: {}
    },
    reducers: {
        setPrograms: (state, action) => {
            state.programs = action.payload;
            console.log("i am in reducer")
        },
        setCurrentProgram:(state, action) =>{
            state.programCurrent = action.payload
            console.log("====== set current program!!!!!!")
        },

        clearPrograms: (state) => {
            state.programs = []
            state.programCurrent = {}
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPrograms, setCurrentProgram } = programsSlice.actions

export default programsSlice.reducer