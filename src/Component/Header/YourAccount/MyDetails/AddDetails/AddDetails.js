import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import Footer from '../../../../Footer/Footer';
import Header from '../../../Header';

const AddDetails = () => {
    const { user } = useAuth()
    let navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://magpyehub-server.onrender.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Address Added Successfully')
                    reset()
                    navigate('/addressBook')
                }
            })
    }

    return <div>
        <Header></Header>
        <Container>
            <Row>
                <Col xs={6}>
                    <Form onSubmit={handleSubmit((onSubmit))} style={{
                        textAlign: 'start'
                    }} >
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                            <Form.Label column sm={4}>
                                Your Full Name
                            </Form.Label>
                            <Col sm={8}>
                                {user.displayName && <Form.Control {...register("displayName")} type="name" defaultValue={user.displayName} required />}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                                Your Email Address
                            </Form.Label>
                            <Col sm={8}>
                                {user.email && <Form.Control {...register("email")} type="text" value={user.email} required />}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalTownCity">
                            <Form.Label column sm={4}>
                                Town/City:
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control {...register("townCity")} type="text" placeholder="Town/City" required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                            <Form.Label column sm={4}>
                                Country
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control {...register("country")} type="country" placeholder="Country " required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPostcode">
                            <Form.Label column sm={4}>
                                Postcode
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control {...register("postcode")} type="text" placeholder="Postcode " required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
                            <Form.Label column sm={4}>
                                Telephone:
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control {...register("telephone")} type="text" required placeholder="Telephone " />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalMobile">
                            <Form.Label column sm={4}>
                                Mobile:
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control {...register("phone")} type="text" placeholder="Phone " required />
                            </Col>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
    </div>
};

export default AddDetails;
