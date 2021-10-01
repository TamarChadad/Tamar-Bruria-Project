import React, { useState, useEffect } from 'react';
import '../styles/programs.css';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux'

const fileType = { 4: 'jpg', 1: 'mp4' }

export const Programs = () => {
    const programs = useSelector((state) => state.programs.programs);
    const files = useSelector((state) => state.files.files);
    const [selectedProgram, setSelectedProgram] = useState({});
    const [isVideoOpen, setVideoOpen] = useState(false);

    const getPathForProgram = (pId, type) => {
        const file = files.find(file => file.FprogramId === pId && file.FtypeId === type);
        console.log(`${file.Fpath}/${file.Fname}.${fileType[type]}`)
        return `${file.Fpath}/${file.Fname}.${fileType[type]}`;
    }

    const handleProgramClick = (program) => {
        setSelectedProgram(program);
        setVideoOpen(true);
    }

    useEffect(() => {
        document.addEventListener('click', () => { if (isVideoOpen) {console.log('yes'); setVideoOpen(false) } });
        return () => {
            document.removeEventListener('click', () => { if (isVideoOpen) { setVideoOpen(false) } }, true);
        };
    }, []);

    return (
        <>
            <div className={`container ${isVideoOpen ? 'body-video-open' : ''}`}>
                {programs.map((program) => (
                    <div className="row" key={program.Pid}>
                        <div className="col-md-8" >
                            <img className="program-img" src={getPathForProgram(program.Pid, 4)} onClick={() => { handleProgramClick(program) }} />
                        </div>
                        <div className="col-md-4 program-description">
                            <b>{program.Pname}</b>
                            <div>{program.Pdescription}</div>
                        </div>
                    </div>

                ))}
            </div>
            {
                isVideoOpen && (
                    <div className="video-open">
                        <ReactPlayer
                            className='react-player fixed-bottom'
                            url={getPathForProgram(selectedProgram.Pid, 1)}
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </div>
                )
            }
        </>
    );
}