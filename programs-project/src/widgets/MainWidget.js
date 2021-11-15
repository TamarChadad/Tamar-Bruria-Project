import React, { useState, useLayoutEffect } from 'react';
import { Programs } from './Programs';
import { ApiCalls } from '../services/Api';

export const MainWidget = () => {
    const { GetPrograms, GetFiles, GetResponses} = ApiCalls()
    useLayoutEffect(() => {
        GetFiles();
        GetPrograms();
        GetResponses();
    }, []);

    return (
        <div>
            <Programs />
        </div>
    )
}

