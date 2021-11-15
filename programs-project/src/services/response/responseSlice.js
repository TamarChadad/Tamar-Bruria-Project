import { createSlice } from '@reduxjs/toolkit'

export const responsesSlice = createSlice({
    name: 'responses',
    initialState: {
        responses:[]
    },
    reducers: {
        setResponses: (state, action) => {
            
            state.responses = action.payload
        },
        clearResponses: (state) => {
            state.responses = []
        },
    },
   
})
export const { setResponses } = responsesSlice.actions

export default responsesSlice.reducer