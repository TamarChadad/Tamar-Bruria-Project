
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPrograms } from '../services/program/programSlice';
import { setResponses } from '../services/response/responseSlice';

import * as constants from './constants';

export const ApiCalls = () => {
    const { externals: { apiUrl } } = constants;
    const dispatch = useDispatch();
    const GetPrograms = () => {
        return fetch(`${apiUrl}program`, { mode: 'no-cors' })
        .then(res => res.json())
        .then(data => {
            console.log('data', data);
            debugger;
            dispatch(setPrograms(data));
        }).catch((err) => console.log('error!!!', err));
    }
    const getResponses = () =>{
        return fetch(`${apiUrl}response`, { mode: 'no-cors' })
        .then(res => res.json())
        .then(data => {
            console.log('data', data);
            debugger;
            dispatch(setResponses(data));
        }).catch((err) => console.log('error!!!', err));
    }

    const getFiles = () => {
        return fetch(`${apiUrl}file`, { mode: 'no-cors' }).then(res => res.json()).then(data => {
            console.log('data', data);
            // dispatch(setPrograms(data));
        }).catch((err) => console.log('error!!!', err));
    }

    const register=(user)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
    
        return fetch(`${apiUrl}user`, requestOptions).then(res=>console.log(res));
    }
    return [GetPrograms,getFiles,register, getResponses]
}




