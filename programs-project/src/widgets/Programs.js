import React, { useState, useEffect } from 'react';
import '../styles/programs.scss';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ApiCalls } from '../services/Api';
import { setCurrentProgram } from '../services/program/programSlice';

const fileType = { 4: 'jpg', 1: 'mp4' }

export const Programs = () => {    

    const programs = useSelector((state) => state.programs.programs);
    const files = useSelector((state) =>  state.files.files);
    const dispatch = useDispatch()
    console.log("files", files)

    useEffect(() => {
        debugger
        console.log("in useEffect of program")
        
    }, []);
    
    const [selectedProgram, setSelectedProgram] = useState({});
    const [isVideoOpen, setVideoOpen] = useState(false);
    const getUrlWithId = (pid) => {
        return `/program/${pid}`
    }
    const getPathForProgram  = (pId, type) => {
        const file =  files.find((file) => file.FprogramId === pId && file.FtypeId === type);
        return `${file?.Fpath}/${file?.Fname}.${fileType[type]}`;
    }

    const handleProgramClick = (program) => {
        setSelectedProgram(program);
        setVideoOpen(true);
    }
    const UpdateCurrentProgram = (data) =>{
        dispatch(setCurrentProgram(data));
    }

    return (
        <>
            <div className={`container ${isVideoOpen ? 'body-video-open' : ''}`}>
                {programs.map((program) => (
                    <div key={program.Pid}>
                        <div className="row" key={program.Pid}>
                            <div className="col-md-8 hovereffect" >
                                <img className=" img-fluid" alt="Responsive image" src={getPathForProgram(program.Pid, 4)} />
                                <div className="overlay">
                                    <img className="play-img" src="images/play2.png" onClick={() => { handleProgramClick(program) }} />
                                </div>
                            </div>
                            <div className="col-md-3 program-description">
                                <b>{program.Pname}</b>
                                <div>{program.Pdescription}</div>
                                <button onClick={()=>{UpdateCurrentProgram(program)}}><Link to={getUrlWithId(program.Pid)}>להתרשמות מתוכנית</Link></button>
                                <button onClick={()=>{UpdateCurrentProgram(program)}}><Link to='/detailsForRent'>להזמנת התוכנית</Link></button>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
            {
                isVideoOpen && (
                    <div className="video-open">
                        <button className="video-cross-icon close" type="button" aria-label="Close" onClick={() => setVideoOpen(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <ReactPlayer
                            className='react-player'
                            url={getPathForProgram(selectedProgram.Pid, 1)}
                            width='100%'
                            height='100%'
                            controls={true}
                            playing={true}
                            config={{
                                file: {
                                    attributes: {
                                        controlsList: "nodownload"
                                    }
                                }
                            }}
                        />
                    </div>
                )
            }
        </>
    );
}