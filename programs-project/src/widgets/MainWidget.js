import React, { useEffect } from 'react';
import { Programs } from './Programs';
import {ApiCalls} from '../services/Api';

export const MainWidget = () => {
    const [GetPrograms] = ApiCalls()
    useEffect(() => {
        GetPrograms();
    }, []);

    return (
        <Programs />
    )
}

