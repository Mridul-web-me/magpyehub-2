import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row, Spinner, } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading2, authLoginError } = useAuth();
    const history = useNavigate()
    const location = useLocation()
    // console.log(loginData);
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        // console.log(field, value, newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, history, location);
        return
    }
    return (

        <Container fluid>
            <h5 style={{ margin: '50px' }}>RETURNING CUSTOMER</h5>
            {isLoading2 ? <div>
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
            </div> : <Form onSubmit={handleLoginSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">
                        Email Address
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control name="email" type="email" placeholder="Email" onChange={handleOnChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control name="password" type="password" placeholder="Password" onChange={handleOnChange} />
                    </Col>
                </Form.Group>
                <Button variant="outline-primary" type='submit' >Login</Button> <br />
                <Link to="/ForgotPass" style={{
                    color: '#303030'
                }}>Forgotten Password?</Link>
            </Form>}

            {user?.email && [
                'success'
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    Login Success
                </Alert>
            ))}
            {authLoginError && [
                'danger'
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    {authLoginError}
                </Alert>
            ))}

        </Container >
    )
}

export default Login
