import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const [passDidNotMatch, setPassDidNotMatch] = useState('')
    const history = useNavigate()
    const location = useLocation()

    const { registerUser, isLoading, user, authError } = useAuth();

    // console.log(loginData);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        // console.log(field, value, newLoginData);
    }
    const handleRegistrationSubmit = e => {
        e.preventDefault();
        if (loginData.password1 !== loginData.password2) {
            setPassDidNotMatch('password did not match');
            return
        }
        else {
            setPassDidNotMatch('')
            registerUser(loginData.email, loginData.password1, loginData.name, loginData.phone, loginData.address1, loginData.address2, loginData.townCity, loginData.country, loginData.postcode, loginData.telephone, history, location);
            // loginData.address1, loginData.address2, loginData.townCity, loginData.country, loginData.postcode, loginData.telephone, loginData.country,

        }

    }

    return (

        <div>
            <h5 style={{ margin: '50px' }}>CREATE AN ACCOUNT</h5>
            {isLoading ? <div>
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
            </div> : <Form onSubmit={handleRegistrationSubmit} autoComplete='nope'>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">Name</Form.Label>
                    <Col sm="8" style={{
                        display: 'flex'
                    }}>
                        {user && registerUser && <Form.Control
                            autoComplete="nope"
                            sm="8"
                            type="name"
                            name="name"
                            onBlur={handleOnBlur}
                            required />}<span style={{ fontSize: '24px', color: 'red', margin: '5px' }}>*</span>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Email Address
                    </Form.Label>
                    <Col sm="8" style={{
                        display: 'flex'
                    }}>
                        {user && registerUser && <Form.Control
                            autoComplete="nope"
                            required
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                        />}<span style={{ fontSize: '24px', color: 'red', margin: '5px' }}>*</span>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Address 1
                    </Form.Label>
                    <Col sm="8" style={{
                        display: 'flex'
                    }}>
                        {user && registerUser && <Form.Control
                            autoComplete="nope"
                            required
                            type="text"
                            name="address1"
                            onBlur={handleOnBlur}
                        />}<span style={{ fontSize: '24px', color: 'red', margin: '5px' }}>*</span>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Address 2
                    </Form.Label>
                    <Col sm="8" >
                        {user && registerUser && <Form.Control
                            style={{
                                width: '95%'
                            }}
                            autoComplete="nope"
                            type="text"
                            name="address2"
                            onBlur={handleOnBlur}
                        />}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Town / City
                    </Form.Label>
                    <Col sm="8" style={{
                        display: 'flex'
                    }}>
                        {user && registerUser && <Form.Control
                            autoComplete="nope"
                            required
                            type="text"
                            name="townCity"
                            onBlur={handleOnBlur}
                        />}<span style={{ fontSize: '24px', color: 'red', margin: '5px' }}>*</span>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Country
                    </Form.Label>
                    <Col sm="8" style={{
                        display: 'flex'
                    }}>
                        {user && registerUser && <Form.Control
                            autoComplete="nope"
                            required
                            name="country"
                            type="text"
                            onBlur={handleOnBlur}
                        />}
                        <span style={{ fontSize: '24px', color: 'red', margin: '5px' }}>*</span>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Postcode
                    </Form.Label>
                    <Col sm="8" style={{
                        display: 'flex'
                    }}>
                        {user && registerUser && <Form.Control
                            autoComplete="nope"
                            required
                            type="text"
                            name="postcode"
                            onBlur={handleOnBlur}
                        />}<span style={{ fontSize: '24px', color: 'red', margin: '5px' }}>*</span>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Telephone No.
                    </Form.Label>
                    <Col sm="8">
                        {user && registerUser && <Form.Control
                            style={{
                                width: '95%'
                            }}
                            type="phone"
                            name="telephone"
                            onBlur={handleOnBlur}
                        />}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Phone
                    </Form.Label>
                    <Col sm="8" style={{
                        display: 'flex'
                    }}>
                        {user && registerUser && <Form.Control
                            required
                            type="phone"
                            name="phone"
                            onBlur={handleOnBlur}
                        />}<span style={{ fontSize: '24px', color: 'red', margin: '5px' }}>*</span>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8" style={{
                        display: 'flex'
                    }}>
                        <Form.Control

                            required
                            type="password"
                            name="password1"
                            onBlur={handleOnBlur}
                        /><span style={{ fontSize: '24px', color: 'red', margin: '5px' }}>*</span>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">
                        Re-Type Password
                    </Form.Label>
                    <Col sm="8" style={{
                        display: 'flex'
                    }}>
                        <Form.Control
                            required
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                        /><span style={{ fontSize: '24px', color: 'red', margin: '5px' }}>*</span>
                    </Col>
                </Form.Group>
                <Button variant="outline-primary" type='submit'>Register</Button>
            </Form>}
            {user?.email && [
                'success'
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    Registration Success
                </Alert>
            ))}
            {authError && [
                'danger'
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    {authError}
                </Alert>
            ))}
            {passDidNotMatch && [
                'danger'
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    {passDidNotMatch}
                </Alert>
            ))}
        </div>
    )
}

export default Register
