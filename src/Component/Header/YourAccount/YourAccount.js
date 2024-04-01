import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header';
import './YourAccount.css'

const YourAccount = () => {
    const { logOut, user, admin } = useAuth();


    return (
        <div className='yourAccount'>
            <Helmet>
                <title>
                    MagpyehubOnline | Account
                </title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <Container fluid style={{
                margin: '50px 0'
            }}>
                <h4 className='text-start' style={{
                    color: '#303030',
                    fontWeight: '300'
                }} >Hello <span style={{ textTransform: 'uppercase', fontWeight: '500' }}>{user.displayName}</span>, Welcome to your MagpyeHub.com Account</h4>
            </Container>
            <Container className='yourAccountContent'>
                <Row style={{
                    textAlign: 'start'
                }}>
                    {!admin && <Col xs={6}>
                        <div>
                            <h4 style={{

                                fontWeight: '300'
                            }}><Link to={'/orderHistory'} style={{
                                color: '#000'
                            }}>ORDER HISTORY</Link></h4>
                            <p>Track your recent orders and view details of older orders</p>
                        </div>

                        <hr />
                    </Col>}
                    {!admin && <Col xs={6}>
                        <div>
                            <h4><Link to="/myFiles">MY FILES</Link></h4>
                            <p>View a list of files that are linked to your account</p>
                        </div>
                        <hr />
                    </Col>}
                    {!admin && <Col xs={6}>
                        <div>
                            <h4><Link to={'/myDetails'}>MY DETAILS</Link></h4>
                            <p>Update your account details including your email address and newsletter subscription</p>
                        </div>
                        <hr />
                    </Col>}
                    {!admin && <Col xs={6}>
                        <div >
                            <h4><Link to={'/addressBook'}>ADDRESS BOOK</Link></h4>
                            <p>Manage your delivery and billing addresses</p>
                        </div>
                        <hr />
                    </Col>}
                    {!admin && <Col xs={6}>
                        <div>
                            <h4><Link to={'/ChangePass'}>CHANGE PASSWORD</Link></h4>
                            <p>Change the password you use to login</p>
                        </div>
                        <hr />
                    </Col>}
                    <Col xs={6}>
                        <h4><Link to="/" onClick={logOut} >Logout</Link></h4>
                        <p>Securely logout of your MagpyeHub.com account</p>
                        <hr />
                    </Col>
                    {admin && <Col xs={6}>
                        <h4><Link to="/AllOrderHistory" >All Order</Link></h4>
                        <p>Securely logout of your MagpyeHub.com account</p>
                        <hr />
                    </Col>}
                    {admin && <Col xs={6}>
                        <h4><Link to="/addProduct">Add Product</Link></h4>
                        <p>Securely logout of your MagpyeHub.com account</p>
                        <hr />
                    </Col>}
                    {admin && <Col xs={6}>
                        <h4><Link to="/manageProducts">Manage Product</Link></h4>
                        <p>Securely logout of your MagpyeHub.com account</p>
                        <hr />
                    </Col>}
                    {admin && <Col xs={6}>
                        <h4><Link to="/makeAdmin">Make Admin</Link></h4>
                        <p>Securely logout of your MagpyeHub.com account</p>
                        <hr />
                    </Col>}
                </Row>



            </Container>
        </div>
    )
}

export default YourAccount
