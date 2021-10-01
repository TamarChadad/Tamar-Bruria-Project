import { configureStore } from '@reduxjs/toolkit';
import programsReducer from './program/programSlice';
import filesReducer from './file/fileSlice';

export default configureStore({
    reducer: {
        programs: programsReducer,
        files: filesReducer
    },
})