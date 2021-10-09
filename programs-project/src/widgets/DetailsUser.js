
import React, { useState } from 'react';
import '../styles/detailsUser.scss';
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, FloatingLabel, Col } from "react-bootstrap"

export const DetailsUser = () => {

    return (
        <div className="wrapper-form">
            <Form>

                {/* <div className="container"> */}
                <div >
                    <Row className="g-10">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="שם פרטי">
                                <Form.Control type="text" placeholder="firstName" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel className="label"controlId="floatingInputGrid" label="שם משפחה">
                                <Form.Control type="text" placeholder="lastName" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-10 ">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="עיר">
                                <Form.Control type="text" placeholder="city" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="כתובת">
                                <Form.Control type="text" placeholder="address" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-10">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="טלפון">
                                <Form.Control type="text" placeholder="phone" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="מייל">
                                <Form.Control type="email" placeholder="email" />
                            </FloatingLabel>
                        </Col>
                    </Row>     
                    <Row className="g-10 mb-3">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="שם משתמש">
                                <Form.Control type="text" placeholder="userName" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="סיסמה">
                                <Form.Control type="password" placeholder="password" />
                            </FloatingLabel>
                        </Col>

                    </Row>

                    <Button className="submit" variant="primary" type="submit">
                        שלח
                    </Button>
                </div>
                {/* 
                <div className="">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputCity" placeholder="city" />
                        <label htmlFor="floatingInputCity">עיר</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputStreet" placeholder="street" />
                        <label htmlFor="floatingInputStreet">רחוב</label>
                    </div>
                </div>

                <div className="">
                    <div className="mb-3 form-floating ">
                        <input type="text" className="form-control" id="floatingInputPhone" placeholder="phone" />
                        <label htmlFor="floatingInputPhone">טלפון</label>
                    </div>

                    <div className="mb-3 form-floating ">
                        <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                        <label htmlFor="floatingInputEmail">מייל</label>
                    </div>
                </div>

                <div className="">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputUserName" placeholder="userName" />
                        <label htmlFor="floatingInputUserName">שם משתמש</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">סיסמה</label>
                    </div>
                </div>
                <input type="submit" />
            </div> */}
            </Form>
        </div>

    )
}