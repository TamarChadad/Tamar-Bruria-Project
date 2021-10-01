import React, { useEffect } from 'react';
import { Programs } from './Programs';
import * as apiActions from '../services/Api';

export const MainWidget = () => {
    useEffect(() => {
        apiActions.GetPrograms();
    }, []);

    return (
        <Programs />
    )
}

