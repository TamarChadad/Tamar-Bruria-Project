import React, { useEffect, useState } from 'react';
import { ApiCalls } from '../services/Api';

export const ShortName = (props) => {
    const [name, setName] = useState();

    useEffect(() => {
        getName();
    }, [])
    
    function getName() {
        return fetch(`http://localhost:55460/api/user/getName/${props.userId}`)
            .then((res) => res.json())
            .then((data) => setName(data));
    }
    

    return (
        <div>
            {name}
        </div>
    )
}