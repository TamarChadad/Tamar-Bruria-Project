import React, {useSelector, useDispatch, useEffect, useState} from 'react';
import { userActions } from '../services/user/UserAction';

export const Users = () =>{
    const [users,setUsers]=useState([])
    // const users = []// useSelector(state => state.users);
    // const dispatch = useDispatch();
    
    useEffect(() => {
        // dispatch(userActions.getAll());
        return fetch(`http://localhost:55460/api/user`).then(res=>res.json()).then(data=>{ setUsers(data)})
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    {users.map((user)=>(
                        <div key={user.Uid}>first name: {user.UfirstName}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}