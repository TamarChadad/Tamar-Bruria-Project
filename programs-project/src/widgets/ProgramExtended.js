import React, { useEffect } from "react";
import ReactDOM from 'react-dom';   
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import { ApiCalls } from '../services/Api';

import '../styles/programExtended.scss'
const ProgramExtended = () => {
    const { id } = useParams();
    // const [getResponses] = ApiCalls()
    const responses = useSelector((state) => state.responses.responses.filter(r => r.RSprogramId == id));
    const program = useSelector((state) => state.programs.programs.filter(p => p.Pid == id))[0];
    
    console.log("=========", program)
    console.log("====== responses =======", responses)
    useEffect(() => {
        // getResponses()
        console.log("useEffect!!!!!!!!!!!!!!")
    }, []);
    const getSmallName =  async (rId) => {
        let response = responses.filter(r => r.RSid == rId)[0];
        console.log("getSmallName:", response.RSuserId)
        // console.log(`http://localhost:55460/api/user/${response.RSuserId}`)
        // let user = {}
        //  fetch(`http://localhost:55460/api/user/${response.RSuserId}`, { mode: 'no-cors' }).then(res => res.json()).then(data => {
        //    console.log("data with fetch",data)
        //  }).catch((err) => console.log('error!!!', err));
        //  console.log(user)

        // return user.UfirstName + ". " + user.UlastName +".";
        // let url = `http://localhost:55460/api/user`;
        // const options = { method: "GET", headers: { "Content-type":"json" } };
        // let user ={}
        // try {
        //  user = await fetch(url, options)
        //         .then(res => res.json());
        // }
        // catch (err) {
        //      console.log("error", err)
        // }
        // console.log(user)
        // return user.UfirstName[0] + ". " + user.UlastName[0] + ".";

    }
    return (

        <>
            <h2>{program.Pname}</h2>
            <Row>
                <Col className="detailsProgram">
                    <div>
                        <p><span>אופי התכנית:   </span>{program.Ptype}</p>
                        <p><span>  קהל היעד:   </span>{program.PtargetAudience}</p>
                        <p><span>  אורך התכנית:   </span>{program.Ptime}</p>
                        <p><span>  מחיר:   </span>{program.Pprice
                        }</p>

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
                <div>
                    {responses.map((response) => (
                        <>
                            <div key= {response.RSid}>
                                <div >
                                    {response.RSdescription}
                                </div> 
                                <div>{getSmallName(response.RSid)}</div>

                                <hr />
                            </div>
                        </>
                    ))}
                </div>
            </Row>
        </>
    );
};
export default ProgramExtended;