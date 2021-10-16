
import React, { useState } from 'react';
import '../styles/register.scss';
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, FloatingLabel, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';

export const Login = () => {

    return (
        <div className="wrapper-form">
            <Form>

                {/* <div className="container"> */}
                <div >

                    <Row className="g-10 mb-3">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="שם משתמש">
                                <Form.Control type="text" placeholder="userName" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="סיסמה">
                                <Form.Control type="password" placeholder="password" />
                            </FloatingLabel>
                        </Col>

                    </Row>

                    
                    <Button className="submit" variant="primary" type="submit">
                    כניסה
                    </Button>
                    <Link to="/register" >הרשמה</Link>

                </div>

            </Form>
        </div>

    )
}