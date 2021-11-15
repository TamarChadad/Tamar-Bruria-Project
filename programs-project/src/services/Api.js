
import { ConstructionOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPrograms } from '../services/program/programSlice';
import { setResponses } from '../services/response/responseSlice';
import * as constants from './constants';
import { setFiles } from './file/fileSlice';
import { setError } from './errors/errorSlice';
import { setUser } from './user/userSlice';
export const ApiCalls = () => {
    const { externals: { apiUrl } } = constants;
    const dispatch = useDispatch();

    function GetPrograms() {
        return fetch(`${apiUrl}program`)
            .then((res) => res.json())
            .then((data) => {
                console.log("i in get programs!!!!!!!111", data)
                dispatch(setPrograms(data));
            })
    }
    function GetResponses() {
        return fetch(`${apiUrl}response`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data-response', data);
                dispatch(setResponses(data));
            })
    }

    function GetFiles() {
        return fetch(`${apiUrl}file`)
            .then((res) => res.json())
            .then((data) => {
                console.log("get filessssss", data)
                dispatch(setFiles(data));
            }).catch((err) => console.log('error!!!', err));
    }


    function RegisterPost(user) {
        debugger
        console.log("i am in register and try to post the user")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        return fetch(`${apiUrl}user`, requestOptions).then((res) => {
            //navigate to login
        }).catch((err) => {
            if (err.includes('Uniqe')) {
                dispatch(setError({ type: 'custom', payload: { code: 1, message: 'שם משתמש כבר קיים במערכת, נסה שם אחר' } }));
            }
            dispatch(setError({ type: 'server', payload: { code: 1, message: err } }))

        });
    }

    function IsExistUserForLogin(userName, password) {
        // let result;
        fetch(`${apiUrl}user/login/${userName}/${password}`)
            .then(res => res.json())
            .then((data) => console.log(data))
        // console.log("result", result)
        // return result;
    }
    function login(userName, password) {
        console.log("in login ==== userName", userName,"  password:", password)
        fetch(`${apiUrl}user/login/${userName}/${password}`)
            .then(res => res.json())
            .then((data) => {  console.log("data in apicalls of login", data)
                dispatch(setUser(data))
              
            })

    }
    return { GetPrograms, GetFiles, GetResponses, RegisterPost, IsExistUserForLogin, login };
}