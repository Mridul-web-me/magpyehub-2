import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import useAuth from '../../../../hooks/useAuth'
import Header from '../../Header'

const ChangePass = () => {
    const [inputData, setInputData] = useState({})
    const [passDidNotMatch, setPassDidNotMatch] = useState('')
    // const history = useNavigate()

    const { passChange, isLoading, user, authError } = useAuth();

    // console.log(loginData);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...inputData };
        newLoginData[field] = value;
        setInputData(newLoginData)
        // console.log(field, value, newLoginData);
    }
    const handlePasswordUpdate = e => {
        e.preventDefault();
        if (inputData.newPassword !== inputData.newPassword2) {
            setPassDidNotMatch('password did not match');
            return
        }
        else {

            setPassDidNotMatch('')
            passChange(inputData.password, inputData.newPassword);

        }

    }
    return (
        <div>
            <Helmet>
                <title>
                    Change Password
                </title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <div>
                <h5>Change password</h5>
                {!isLoading && <Form onSubmit={handlePasswordUpdate}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="4">
                            Old Password
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                type="password"
                                name="Password"
                                placeholder="Password"
                                onBlur={handleOnBlur}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="4">
                            New Password
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                type="password"
                                name="newPassword"
                                placeholder="Password"
                                onBlur={handleOnBlur}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="4">
                            Confirm Password
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                type="password"
                                name="newPassword2"
                                placeholder="Password"
                                onBlur={handleOnBlur}
                            />
                        </Col>
                    </Form.Group>
                    <Button variant="outline-primary" type='submit'>Change Password</Button>
                </Form>}
                {isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
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
        </div>
    )
}

export default ChangePass
