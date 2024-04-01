import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Details from './Details';
import logo from '../../../../../img/logo.jpg'
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment/Payment';
import { Helmet } from 'react-helmet';
import useProduct from '../../../../../hooks/Product/useProduct';
import useAuth from '../../../../../hooks/useAuth';
import Footer from '../../../../Footer/Footer';
import { loadStripe } from '@stripe/stripe-js';
import Paypal from './Paypal/Paypal';


const stripePromise = loadStripe('pk_test_51KUuQEJYFu4RGWvKjw2LK5rIC9EAnyTQHbmzGNgGnb0XcOvh36utplRWpUtsK2EJAJEw0YExvwQxLNSv7hY3qdPh00BNUN9m3S');

const ProceedToPayment = () => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)
    const { total, } = useProduct({});
    const [profile, setProfile] = useState([])
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
            });
    }, [user.email])
    // console.log('client profile', profile)
    return <div>

        <Helmet>
            <title>Proceed To Payment</title>
            <meta name="description" content="This is Magpyehub Online Shop" />
        </Helmet>
        <a href="/home" >
            <img src={logo} style={{
                margin: '15px 0'
            }} alt="" className='img-fluid' width="200px" height="200px" />
        </a>
        <Container style={{
            margin: '50px 0'
        }}>
            <Row>
                <Col md={4} sm={12}>
                    <h2>Delivery Address</h2>


                    {loading ? <div className='text-center' style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="info" />
                    </div> : profile.map(address => <Details
                        key={address._id}
                        address={address}
                    ></Details>
                    )}

                </Col>
                <Col md={4} sm={12}>
                    <h2>Billing Address</h2>
                    {loading ? <div className='text-center' style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="info" />
                    </div> : profile.map(address => <>
                        <Details
                            key={address._id}
                            address={address}
                        ></Details>
                        <Link to={`/updateDetails/${address._id}`}>
                            <Button>Update Address</Button>
                        </Link>
                    </>
                    )}

                </Col>
            </Row>
            <br />
            {loading ? <div className='text-center' style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
            </div> : <Button variant='outline-dark' data-bs-toggle="modal" data-bs-target="#exampleModal">Checkout</Button>}
            <div style={{ margin: '20px 0' }}>
                {profile.map(clientAddress =>
                    <>
                        <Paypal clientAddress={clientAddress} />
                    </>
                )
                }
            </div>
            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Payment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {profile.map(clientAddress =>
                                <>

                                    {total && <Elements
                                        clientAddress={clientAddress}
                                        stripe={stripePromise}>

                                        <Payment address={clientAddress} />

                                    </Elements>}
                                </>

                            )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </Container>
        <Footer></Footer>
    </div>
};

export default ProceedToPayment;
