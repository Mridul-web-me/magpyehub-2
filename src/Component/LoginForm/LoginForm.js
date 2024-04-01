import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from './Login/Login'
import Register from './Register/Register'
import './LoginForm.css'
import PromoUnit from '../PromoUnit/PromoUnit'
import Newsletter from '../Newsletter/Newsletter'

const LoginForm = () => {
    return (
        <>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container className='loginForm'>
                <Row style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // alignItems: 'center',

                }}>
                    <Col xs={12} md={6}>
                        <Register></Register>
                    </Col>
                    <Col xs={12} md={6}>
                        <Login></Login>
                    </Col>
                </Row>
            </Container>
            <Container className='tabContainer'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Register</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Login</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Register></Register>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Login></Login>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default LoginForm
