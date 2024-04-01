import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useProduct from '../../../../hooks/Product/useProduct';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Footer/Footer';
import Newsletter from '../../../Newsletter/Newsletter';
import FavouriteProduct from '../../../Product/FavouriteProduct/FavouriteProduct';
import PromoUnit from '../../../PromoUnit/PromoUnit';
import Header from '../../Header';
import Carts from './Carts';
import Paypal from './ProceedToPayment/Paypal/Paypal';


const Cart = () => {
    const { totalCartQuantity, total, carts, loading } = useProduct({});
    const { user } = useAuth()
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
            });
    }, [user.email])

    return (
        <>
            <Helmet>
                <title>My Basket</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container fluid style={{
                margin: '50px 0'
            }}>
                {loading ? <div>
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="info" />
                </div> : carts.length ?
                    <>
                        <div style={{
                            textAlign: 'end'
                        }}>
                            <Link to='/proceedToPayment'>
                                <Button variant='success'>Proceed To Payment </Button>
                            </Link>
                        </div>
                        <div className='py-5 bg-light'>


                            <div>
                                <Row style={{
                                    borderTop: '1px solid rgb(159 159 159)',
                                    borderBottom: '1px solid rgb(159 159 159)',
                                    margin: '10px 0'
                                }}>
                                    <Col xs={6} md={6}>
                                        <h5 className='text-start'><i className="fas fa-shopping-basket"></i> Your Basket Contains: {totalCartQuantity} Items</h5>
                                    </Col>
                                    <Col xs={6} md={2} className="quantity">
                                        <h5>Quantity</h5>
                                    </Col>
                                    <Col xs={6} md={2} className="price">
                                        <h5>Price</h5>
                                    </Col>
                                    <Col xs={6} md={2} className="subTotal">
                                        <h5>Sub Total</h5>
                                    </Col>
                                </Row>

                                <div>
                                    {
                                        carts.map((cart) => <Carts
                                            key={cart._id}
                                            cart={cart}
                                        ></Carts>)
                                    }
                                </div>

                                <Row>
                                    <Col xs={6} md={6}>

                                    </Col>
                                    <Col xs={6} md={2}>

                                    </Col>
                                    <Col xs={6} md={2}>
                                        <h5>SubTotal</h5>
                                    </Col>
                                    <Col xs={6} md={2}>
                                        <h5>$ {total.toFixed(2)}</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItem: 'end',
                            justifyContent: 'end'
                        }}>
                            <div>
                                {profile.map(clientAddress =>
                                    <>
                                        <Paypal clientAddress={clientAddress} />
                                    </>
                                )
                                }
                            </div>
                            <div>
                                <Link to='/proceedToPayment'>
                                    <Button variant='success'>Proceed To Payment </Button>
                                </Link>
                            </div>
                        </div>
                    </>
                    :

                    <>
                        <div style={{
                            height: '50vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div>
                                <h4>You currently have nothing in your Basket</h4>
                                <p>Why not have a look at some of our best offers we've selected for you below:</p>
                            </div>
                        </div>
                        <FavouriteProduct></FavouriteProduct>
                    </>
                }
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    );
};

export default Cart;