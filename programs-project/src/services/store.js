import { configureStore } from '@reduxjs/toolkit';
import programsReducer from './program/programSlice';
import filesReducer from './file/fileSlice';
import responseReducer from './response/responseSlice'
export default configureStore({
    reducer: {
        programs: programsReducer,
        files: filesReducer,
        responses:responseReducer
    },
})