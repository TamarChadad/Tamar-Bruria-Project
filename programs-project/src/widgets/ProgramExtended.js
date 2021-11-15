import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Response } from "./Response";
import '../styles/programExtended.scss'
const ProgramExtended = () => {
    const { id } = useParams();
    const program = useSelector((state) => state.programs.programs.filter(p => p.Pid == id))[0];
    
    return (
        <>
            <h2>{program.Pname}</h2>
            <Row>
                <Col className="detailsProgram">
                    <div>
                        <p><span>אופי התכנית:   </span>{program.Ptype}</p>
                        <p><span>  קהל היעד:   </span>{program.PtargetAudience}</p>
                        <p><span>  אורך התכנית:   </span>{program.Ptime}</p>
                        <p><span>  מחיר:   </span>{program.Pprice}</p>
                    </div>
                </Col>
                <Col className="descriptionProgram">
                    <h3>הסבר על מהלך התכנית</h3>
                    <div>
                        {program.PextendedDescription}
                    </div>
                </Col>
            </Row>
            <Row>
                        <Response programId ={id}/>

            </Row>
            <Row>
                <button> <Link to="/login">לצפיה במצגת המורחבת</Link></button>
            </Row>
        </>
    );
};
export default ProgramExtended;