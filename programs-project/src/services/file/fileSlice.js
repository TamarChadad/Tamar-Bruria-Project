import { createSlice } from '@reduxjs/toolkit'

export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        files: []
    },
    reducers: {
        setFiles: (state, action) => {
            state.files = action.payload
            console.log("in set file")
        },

        clearFiles: (state) => {
            state.files = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFiles } = filesSlice.actions

export default filesSlice.reducer