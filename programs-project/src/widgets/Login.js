
import React, { useState } from 'react';
import '../styles/register.scss';
import { Form, Button, Row, FloatingLabel, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { ApiCalls } from '../services/Api';
import { useSelector } from 'react-redux';


export const Login = () => {
    const [submitted, setSubmitted] = useState(false);

    const userLogin = useSelector((state) => state.user.user);
    const { IsExistUserForLogin, login } = ApiCalls()

    const [user, setUser] = useState({
        Upassword: '',
        UuserName: ''
    });

   async function handleSubmit(e) {
        e.preventDefault();
        // console.log(IsExistUserForLogin(user.UuserName, user.Upassword))
        console.log("username:", user.UuserName, "  password:", user.Upassword)
        await login(user.UuserName, user.Upassword)
        if (userLogin == null) {
            setSubmitted(true)
            
            console.log("is not correct")
        }
        else {
            setSubmitted(false)
            console.log("is correct and i want to do submit")
            window.location.href = "http://localhost:3000/detailsForRent" 
        }
        // if(IsExistUserForLogin(user.UuserName, user.Upassword))
        //     console.log("the user is correct!!")
        // else console.log("the user is not correct!!")
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    return (
        <div className="wrapper-form">
            <Form>


                {/* <div className="container"> */}
                {submitted &&
                    <div className="invalid-feedback">השם משתמש או הסיסמה אינם תקינים!</div>
                }
                <div >

                    <Row className="g-10 mb-3">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="שם משתמש">
                                <Form.Control name="UuserName" type="text" placeholder="userName" onChange={handleChange} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="סיסמה">

                                <Form.Control name="Upassword" type="password" placeholder="password" onChange={handleChange} />

                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Button className="submit" variant="primary" type="submit" onClick={handleSubmit}>
                        כניסה
                    </Button>
                    <Link to="/register" >הרשמה</Link>

                </div>

            </Form>
        </div>

    )
}
