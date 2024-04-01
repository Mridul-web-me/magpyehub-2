import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

import Header from '../../Header/Header';

const ForgotPass = () => {

    const [loginData, setLoginData] = useState({});
    const { resetPassword, isLoading, } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        // console.log(field, value, newLoginData);
    }

    const handleResetPassword = e => {
        e.preventDefault();
        return resetPassword(loginData.email);
        
    }

    return (
        <div>
            <Header></Header>
            <h5>Forget Password</h5>
            {!isLoading && <Form onSubmit={handleResetPassword}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Email Address
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            onBlur={handleOnBlur}
                        />
                    </Col>
                </Form.Group>
                <Button variant="outline-primary"  type='submit'>Submit</Button>
            </Form>}
            {isLoading && [
                'success'
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    Check your email
                </Alert>
            ))}
        </div>
    )
};

export default ForgotPass;
