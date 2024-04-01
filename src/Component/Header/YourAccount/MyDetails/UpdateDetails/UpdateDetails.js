import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import Footer from '../../../../Footer/Footer';
import Header from '../../../Header';
import UpdateCountry from './UpdateCountry';
import UpdatePhone from './UpdatePhone';
import UpdatePostcode from './UpdatePostcode';
import UpdateTelephone from './UpdateTelephone';
import UpdateTownCity from './UpdateTownCity';


const UpdateDetails = () => {
    const { user } = useAuth();
    const profileId = useParams()
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://magpyehub-server.onrender.com/users?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => {
                setProfile(data.data)
                setLoading(false)
            })
    }, [user.email])

    // const handleNameUpdate = e => {
    //     const updatedName = e.target.value
    //     const updatedAddressBook = [{ name: updatedName, email: user.email }];
    //     setProfile(updatedAddressBook);
    // }

    const handleUpdateDetails = e => {

        e.preventDefault()
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Row style={{
                    margin: '50px 0'
                }}>
                    <h2>Update Your Details</h2>
                    {loading ? <div><Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="info" /></div> :
                        profile.map(update => <div>
                            <Col xs={6}>

                                <div style={{
                                    textAlign: 'start'
                                }} >
                                    <hr />
                                    <Row>
                                        <Col sm={4}>
                                            <h6>Your Full Name: </h6>
                                        </Col>
                                        <Col sm={6}>
                                            <p style={{
                                                textTransform: 'uppercase',
                                                fontWeight: '600'
                                            }}>{user.displayName}</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm={4}>
                                            <h6>Your Email Address: </h6>
                                        </Col>
                                        <Col sm={6}>
                                            <p>{user.email}</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col column sm={4}>
                                            <h6>Town/City: </h6>
                                        </Col>
                                        <Col sm={6}>
                                            <p style={{
                                                textTransform: 'capitalize'
                                            }}>{update.townCity}</p>
                                        </Col>
                                        <Col sm={2}>
                                            <UpdateTownCity
                                                update={update}
                                            ></UpdateTownCity>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col column sm={4}>
                                            <h6>Country: </h6>
                                        </Col>
                                        <Col sm={6}>
                                            <p style={{
                                                textTransform: 'capitalize'
                                            }}>{update.country}</p>
                                        </Col>
                                        <Col sm={2}>
                                            <UpdateCountry
                                                update={update}
                                            ></UpdateCountry>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col column sm={4}>
                                            <h6>Postcode: </h6>
                                        </Col>
                                        <Col sm={6}>
                                            <p>{update.postcode}</p>
                                        </Col>
                                        <Col sm={2}>
                                            <UpdatePostcode
                                                update={update}
                                            ></UpdatePostcode>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col column sm={4}>
                                            <h6>Telephone: </h6>
                                        </Col>
                                        <Col sm={6}>
                                            <p>{update.telephone}</p>
                                        </Col>
                                        <Col sm={2}>
                                            <UpdateTelephone
                                                update={update}
                                            ></UpdateTelephone>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col column sm={4}>
                                            <h6> Mobile: </h6>
                                        </Col>
                                        <Col sm={6}>
                                            <p>{update.phone}</p>
                                        </Col>
                                        <Col sm={2}>
                                            <UpdatePhone
                                                update={update}
                                            ></UpdatePhone>
                                        </Col>
                                    </Row>
                                    <hr />
                                </div>
                            </Col>
                        </div>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
};

export default UpdateDetails;
