import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/Product/useProduct';
import useAuth from '../../../hooks/useAuth';
import SearchBox from '../SearchBox/SearchBox';
import logo from '../../../img/logo.jpg'
import './HeaderTop.css'

const HeaderTop = () => {
    const { user } = useAuth();
    const { totalCartQuantity, totalWishListQuantity } = useProduct();
    return (
        <div>
            <div className='header-top'>
                <Container fluid>
                    <Row style={{
                        justifyContent: 'space-between'
                    }}>
                        <Col className='searchBoxCol' xs={4} md={4} style={{
                            margin: '15px 0'
                        }} >
                            <div className='searchBox'>
                                <p style={{
                                    textAlign: 'initial',
                                    letterSpacing: "3px",
                                    marginLeft: '10px',
                                    fontSize: "15px"
                                }}><i className="fas fa-phone"></i> 0800 1 223 023 | MON-SAT, 9AM - 5PM</p>
                                <SearchBox></SearchBox>
                            </div>
                        </Col>
                        <Col xs={4} md={4}>
                            <Link to="/home" >
                                <img src={logo} style={{
                                    margin: '15px 0'
                                }} alt="" className='img-fluid' width="200px" height="200px" />
                            </Link>
                        </Col>
                        <Col xs={4} md={4}>
                            <div className='cartMenu' style={{
                                margin: '15px 0'
                            }}>
                                <div>
                                    {
                                        user?.email ?
                                            <a href="/profile" >
                                                <i className="fas fa-user"></i>
                                                <p >Your Account</p>
                                            </a>
                                            :
                                            <a href="/register">
                                                <i className="fas fa-user"></i>
                                                <p>Login</p>
                                            </a>
                                    }
                                </div>
                                <div className='wishList'>
                                    <Link to="/wish-list">
                                        <i className="fas fa-heart"></i>
                                        <Badge bg="secondary" className='fs-8' style={{
                                            borderRadius: '50%'
                                        }}>{totalWishListQuantity}</Badge>
                                        <p>Wish List</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/cart">

                                        <i className="fas fa-shopping-basket"></i>
                                        <Badge bg="secondary" className='fs-8' style={{
                                            borderRadius: '50%'
                                        }}>{totalCartQuantity}</Badge>
                                        <p>My Basket</p>

                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};

export default HeaderTop;
