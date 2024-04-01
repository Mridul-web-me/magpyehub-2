import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Product.css'

import group1 from '../../img/Group/group1.jpg'
import group2 from '../../img/Group/group2.jpg'
import group3 from '../../img/Group/group3.jpg'
import group4 from '../../img/Group/group4.jpg'
import group5 from '../../img/Group/group5.jpg'
import group6 from '../../img/Group/group6.jpg'


const Product = () => {
    return (
        <div className='product'>
            <Container fluid>
                <Row xs={1} md={3} className="g-4" style={{
                    margin: '10px 0'
                }}>
                    <Col>
                        <Link to="/men"> <Card>
                            <Card.Img variant="top" src={group1} />
                            <div className='cardBody'>
                                <Card.Body>
                                    <Card.Title>MEN</Card.Title>

                                </Card.Body>
                            </div>
                        </Card></Link>
                    </Col>
                    <Col>
                        <Link to="/women">
                            <Card>
                                <Card.Img variant="top" src={group2} />
                                <div className='cardBody'>
                                    <Card.Body>
                                        <Card.Title>WOMEN</Card.Title>
                                    </Card.Body>
                                </div>
                            </Card></Link>
                    </Col>
                    <Col>
                        <Link to="/BabyAndChild">
                            <Card>
                                <Card.Img variant="top" src={group3} />
                                <div className='cardBody'>
                                    <Card.Body>
                                        <Card.Title>CHILD</Card.Title>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                </Row>

                <Row xs={1} md={3} className="g-4" style={{
                    margin: '10px 0'
                }}>
                    <Col>
                        <Link to="/beauty">
                            <Card>
                                <Card.Img variant="top" src={group4} />
                                <div className='cardBody'>
                                    <Card.Body>
                                        <Card.Title>BEAUTY</Card.Title>

                                    </Card.Body>
                                </div>
                            </Card>
                        </Link>

                    </Col>
                    <Col>
                        <Link to="/FurnitureAndLighting">
                            <Card>
                                <Card.Img variant="top" src={group5} />
                                <div className='cardBody'>
                                    <Card.Body>
                                        <Card.Title>FURNITURE</Card.Title>

                                    </Card.Body>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/sportAndLeisure">
                            <Card>
                                <Card.Img variant="top" src={group6} />
                                <div className='cardBody'>
                                    <Card.Body>
                                        <Card.Title>SPORTS</Card.Title>

                                    </Card.Body>
                                </div>
                            </Card>
                        </Link>

                    </Col>
                </Row>
            </Container>
            {/* <Product1></Product1> */}
            {/* Columns are always 50% wide, on mobile and desktop */}
            {/* <Container fluid>
                <Row >
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <Link to="#"><img src={group4} width="500px" className='img-fluid' alt="" /></Link>
                        </div>
                        <div>
                            <h2>Hello</h2>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <Link to="#"><img src={group1} width="500px" className='img-fluid' alt="" /></Link>
                        </div>
                        <div>
                            <h2>Hello</h2>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <Link to="#"><img src={group2} width="500px" className='img-fluid' alt="" /></Link>
                        </div>
                        <div>
                            <h2>Hello</h2>
                        </div>
                    </Col>
                </Row>

            </Container> */}
        </div>
    )
}

export default Product
