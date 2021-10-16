
import React, { useState, useSelector, useDispatch, useEffect } from 'react';
import '../styles/register.scss';
import { Form, Button, Row, FloatingLabel, Col } from "react-bootstrap";
import validate from './helpers/RegisterFormValidation';
import { ApiCalls } from '../services/Api';

export const Register = () => {
    const [register, GetPrograms] = ApiCalls()

    const handleRegisterUser = () => {

    }
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        address:'',
        phone:'',
        email:'',
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    })
    const [submitted, setSubmitted] = useState(false);
    //  const registering = useSelector(state => state.registration.registering);
    // const dispatch = useDispatch();

    // reset login status
    // useEffect(() => {
    //     dispatch(userActions.logout());
    // }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
        setErrors(validate(user))
    }

    console.log('errors 0', errors);

    function handleSubmit(e) {
        e.preventDefault();

        setErrors(validate(user));
        console.log(errors)
        setSubmitted(true);
       // if (user.firstName && user.lastName && user.username && user.password && !errors.password && !errors.username && !errors.firstName && !errors.lastName) {
        // register(user)
        GetPrograms()
       // }
        console.log(errors);
    }
    return (
        <div className="wrapper-form">
            <Form action="">

                {/* <div className="container"> */}
                <div >
                    <Row className="g-10">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="שם פרטי">
                                {submitted && errors.firstName &&
                                    <div className="invalid-feedback">{errors.firstName}</div>
                                }

                                <Form.Control name="firstName" type="text" placeholder="firstName" onChange={handleChange} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel className="label" controlId="floatingInputGrid" label="שם משפחה">
                                {submitted && errors.lastName &&
                                    <div className="invalid-feedback">{errors.lastName}</div>
                                }
                                <Form.Control name="lastName" type="text" placeholder="lastName" onChange={handleChange} />
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
                                <Form.Control name = "address" type="text" placeholder="address" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-10">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="טלפון" >
                                <Form.Control name="phone" type="phone" placeholder="phone" required="true" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="מייל">
                                <Form.Control name="email" type="email" placeholder="email" required="true" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-10 mb-3">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="שם משתמש">
                                {submitted && errors.username &&
                                    <div className="invalid-feedback">{errors.username}</div>
                                }
                                <Form.Control name="username" type="text" placeholder="userName" onChange={handleChange} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="סיסמה">

                                <Form.Control name="password" type="password" placeholder="password" onChange={handleChange} />
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