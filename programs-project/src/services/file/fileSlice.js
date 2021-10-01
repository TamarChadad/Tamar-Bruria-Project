import { createSlice } from '@reduxjs/toolkit'

export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        files: [
            {
                "Fid": 3,
                "Fname": "climax",
                "Fpath": "video/trailer",
                "FtypeId": 1,
                "FprogramId": 3
            },
            {
                "Fid": 5,
                "Fname": "crown",
                "Fpath": "videos/trailer",
                "FtypeId": 1,
                "FprogramId": 4
            },
            {
                "Fid": 7,
                "Fname": "feeling",
                "Fpath": "videos/trailer",
                "FtypeId": 1,
                "FprogramId": 5
            },
            {
                "Fid": 10,
                "Fname": "climax",
                "Fpath": "images",
                "FtypeId": 4,
                "FprogramId": 3
            },
            {
                "Fid": 11,
                "Fname": "crown",
                "Fpath": "images",
                "FtypeId": 4,
                "FprogramId": 4
            },
            {
                "Fid": 12,
                "Fname": "feeling",
                "Fpath": "images",
                "FtypeId": 4,
                "FprogramId": 5
            }
        ]
    },
    reducers: {
        setFiles: (state, action) => {
            state.files = action.payload
        },

        clearFiles: (state) => {
            state.files = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFiles } = filesSlice.actions

export default filesSlice.reducer