import { createSlice } from '@reduxjs/toolkit'

export const errorsSlice = createSlice({
    name: 'errors',
    initialState: {
        customeError: {},
        serverError: {}
    },
    reducers: {
        setError: (state, action) => {
            switch (action.type) {
                case 'custom':
                    state.customeError = action.payload; break;
                case 'server':
                    state.serverError = action.payload; break;
                default: break;
            }
        },

        clearErrors: (state) => {
            state.customeError = {};
            state.serverError = {}
        },
    },
})

// Action creators are generated for each case reducer function
export const { setError } = errorsSlice.actions

export default errorsSlice.reducer