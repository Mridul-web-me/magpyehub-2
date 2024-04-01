import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';
// import singleDetails from '../singleDetails/singleDetails';

const MyDetails = () => {
    const [address, setAddress] = useState([])

    const { user } = useAuth()
    useEffect(() => {
        axios.get(`https://magpyehub-server.onrender.com/users?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => setAddress(data.data))
        console.log(address.length);
        console.log(user.uid);
    }, [user.email])
    return (<div>
        <Header></Header>
        <div>
            <Row style={{
                margin: '50px 0'
            }}>
                <Col xs={6}>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="4">
                                Your Name
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type='text' readOnly defaultValue={user.displayName} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Email
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" readOnly defaultValue={user.email} />
                            </Col>
                        </Form.Group>
                    </Form>
                    {!address.length ? <Link to='/addDetails'>
                        <Button>Add Details</Button>
                    </Link>
                        :
                        address.map(update => <Link key={update._id} to={`/updateDetails/${update._id}`}>
                            <Button>Update Details</Button>
                        </Link>)
                    }


                </Col>
            </Row>
        </div>
        <Footer></Footer>

    </div>)
};

export default MyDetails;
