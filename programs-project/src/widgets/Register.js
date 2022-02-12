
import React, { useState, useSelector, useEffect } from 'react';
import _get from 'lodash/get';
import '../styles/register.scss';
import { Form, Button, Row, FloatingLabel, Col } from "react-bootstrap";
import validate from './helpers/RegisterFormValidation';
import { ApiCalls } from '../services/Api';

export const Register = () => {
    const { RegisterPost } = ApiCalls()

    const [user, setUser] = useState({
        UfirstName: '',
        UlastName: '',
        Uaddress: '',
        Uemail: '',
        Uphone: '',
        Upassword: '',
        UuserName: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        address: '',
        phone: '',
        email: ''
    })
    const [submitted, setSubmitted] = useState(false);
   // const existingUserNameError = useSelector((state) => state.errors.customError);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        setErrors(validate(user));
        if (!errors.address && !errors.phone && !errors.email && !errors.password && !errors.username && !errors.firstName && !errors.lastName) {
            RegisterPost(user)
        }
    }

    return (
        <div className="wrapper-form">
            <Form>

                <div >
                    <Row className="g-10">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="שם פרטי">
                                <Form.Control name="UfirstName" type="text" placeholder="firstName" onChange={handleChange} />
                                {submitted && errors.firstName &&
                                    <div className="invalid-feedback">{errors.firstName}</div>
                                }
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel className="label" controlId="floatingInputGrid" label="שם משפחה">
                                <Form.Control name="UlastName" type="text" placeholder="lastName" onChange={handleChange} />
                                {submitted && errors.lastName &&
                                    <div className="invalid-feedback">{errors.lastName}</div>
                                }
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-10 ">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="עיר">
                                <Form.Control name="Uaddress" type="text" placeholder="city" onChange={handleChange} />
                                {submitted && errors.address &&
                                    <div className="invalid-feedback">{errors.address}</div>
                                }
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
                            <FloatingLabel controlId="floatingInputGrid" label="טלפון" >
                                <Form.Control name="Uphone" type="text" placeholder="phone" onChange={handleChange} />
                                {submitted && errors.phone &&
                                    <div className="invalid-feedback">{errors.phone}</div>
                                }
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="מייל">
                                <Form.Control name="Uemail" type="email" placeholder="email" onChange={handleChange} />
                                {submitted && errors.email &&
                                    <div className="invalid-feedback">{errors.email}</div>
                                }
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-10 mb-3">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="שם משתמש">
                                <Form.Control name="UuserName" type="text" placeholder="userName" onChange={handleChange} />
                                {submitted && (errors.username /* || existingUserNameError */ ) &&
                                    <div className="invalid-feedback">{errors.username /* || _get(existingUserNameError, 'message', '')*/}</div>
                                }
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="סיסמה">
                                <Form.Control name="Upassword" type="password" placeholder="password" onChange={handleChange} />
                                {errors.password &&
                                    <div className="invalid-feedback">{errors.password}</div>
                                }
                            </FloatingLabel>
                        </Col>

                    </Row>

                    <Button className="submit" variant="primary" type="submit" onClick={handleSubmit}>
                        שלח
                    </Button>
                </div>
            </Form>
        </div>

    )
}