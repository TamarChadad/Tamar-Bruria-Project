
import { useDispatch } from 'react-redux';
import { setPrograms } from '../services/program/programSlice';
import * as constants from './constants';

const { externals: { apiUrl } } = constants;

export const GetPrograms = () => {
    // const dispatch = useDispatch();

    return fetch(`${apiUrl}program`, { mode: 'no-cors' }).then(res => res.json()).then(data => {
        console.log('data', data);
        // dispatch(setPrograms(data));
    }).catch((err) => console.log('error!!!', err));
}

export const getFiles = ()=>{
    return fetch(`${apiUrl}file`, { mode: 'no-cors' }).then(res => res.json()).then(data => {
        console.log('data', data);
        // dispatch(setPrograms(data));
    }).catch((err) => console.log('error!!!', err));
}


