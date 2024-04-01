import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Footer/Footer';
import Newsletter from '../../../Newsletter/Newsletter';
import PromoUnit from '../../../PromoUnit/PromoUnit';
import Header from '../../Header';
import OrderedProduct from '../Admin/AllOrderHistory/OrderedProduct/OrderedProduct';

const OrderHistory = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://magpyehub-server.onrender.com/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => {
                setOrders(data.data)
                console.log(data.data)
                setLoading(false)
            });
    }, [user.email])

    return (
        <div>
            <Helmet>
                <title>
                    Order History
                </title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            {loading ? <div><Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" /></div> : orders.length ? <div>
                    <h2 style={{
                        textAlign: 'start',
                        color: '#303030', fontSize: '26px',
                        textTransform: 'uppercase',
                        margin: '20px'
                    }}>Order History</h2>
                    <Row style={{
                        borderTop: '1px solid rgb(159 159 159)',
                        borderBottom: '1px solid rgb(159 159 159)',
                        margin: '10px 0'
                    }}>
                        <Col xs={6} md={6}>
                            <h5 className='text-start'><i className="fas fa-shopping-basket"></i> Your Order Items</h5>
                        </Col>
                        <Col xs={6} md={2}>
                            <h5>Quantity</h5>
                        </Col>
                        <Col xs={6} md={2}>
                            <h5>Price</h5>
                        </Col>
                        <Col xs={6} md={2}>
                            <h5>Status</h5>
                        </Col>
                    </Row>
                    {orders.map(orders =>
                        <>
                            <div
                                key={orders._id}
                                orders={orders}
                            >
                                {
                                    orders.order.map(product =>
                                        <OrderedProduct
                                            key={product._id}
                                            product={product}
                                            orders={orders}
                                        ></OrderedProduct>
                                    )
                                }
                            </div>
                            <div>

                            </div>
                        </>
                    )}


                </div> : <div style={{
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}><h2 style={{ color: '#606060' }}>There is no product in your order</h2></div>}
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
};

export default OrderHistory;
