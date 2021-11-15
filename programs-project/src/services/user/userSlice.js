import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:{}
    },
    reducers: {
        setUser: (state, action) => {
            console.log("setUserrrrrrrrrrrrr")
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = {}
        },
    },
   
})
export const { setUser } = userSlice.actions

export default userSlice.reducer