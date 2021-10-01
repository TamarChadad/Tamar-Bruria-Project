import React, { useState, useEffect } from 'react';
import '../styles/programs.css'
import ReactPlayer from 'react-player'

export const Programs = () => {

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        // dispatch(userActions.getAll());
        return fetch(`http://localhost:55460/api/program`, { mode: 'no-cors' }).then(res => res.json()).then(data => {
            setPrograms(data)
        }).catch((err) => console.log('error!!!', err));
    }, []);
    return (
        <div className="container">
            <div className="row">
                {programs.map((program) => (
                    <div className="program col-md-3" key={program.Pid}>
                        <b>{program.Pname}</b>
                        <ReactPlayer
                            className='react-player fixed-bottom'
                            url='video/trailer/BatMitzva1.mp4'
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}