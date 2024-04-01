import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Footer from '../../../../Footer/Footer';
import Newsletter from '../../../../Newsletter/Newsletter';
import PromoUnit from '../../../../PromoUnit/PromoUnit';
import Header from '../../../Header';
import History from '../History/History';
import OrderedProduct from './OrderedProduct/OrderedProduct';
import './AllorderHistory.css'

const AllOrderHistory = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://magpyehub-server.onrender.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>
                    Magpyehub | All Order
                </title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container fluid>
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
                                <h5 className='text-start'><i className="fas fa-shopping-basket"></i> Total Order Items {orders.length}</h5>
                            </Col>
                            <Col xs={6} md={2} className="quantity">
                                <h5>Quantity</h5>
                            </Col>
                            <Col xs={6} md={2} className="price">
                                <h5>Price</h5>
                            </Col>
                            <Col xs={6} md={2} className="status">
                                <h5>Status</h5>
                            </Col>
                        </Row>
                        {orders.map(orders =>
                            <div
                                key={orders._id}
                                orders={orders}
                            // savedProduct={orders.order.savedProduct}
                            >
                                <History orders={orders}>

                                </History>
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
                        )}


                    </div> : <div style={{
                        height: '50vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><h2 style={{ color: '#606060' }}>No Orders found</h2></div>}
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
};

export default AllOrderHistory;
