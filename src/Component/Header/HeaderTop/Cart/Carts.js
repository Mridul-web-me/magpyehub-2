import React from 'react'
import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDb, DecrementToDb, removeFromDb } from '../../../../fakeDB';
import useProduct from '../../../../hooks/Product/useProduct';
import './Carts.css'

const Carts = ({ cart }) => {
    const { handleRemove, setCart } = useProduct({});
    const [disabled, setDisabled] = useState(true)

    const { _id, img, title, price, quantity } = cart;
    const subtotalPrice = quantity * price;

    const handleIncrement = (_id) => {
        setCart(cart =>
            cart.map((carts) =>
                _id === carts._id ? { ...carts, quantity: carts.quantity + 1 } : carts
            )
        );
        setDisabled(false)
        addToDb(_id);
    }
    const handleDecrement = (_id) => {
        setCart(cart =>
            cart.map((carts) =>
                _id === carts._id ? { ...carts, quantity: carts.quantity - (carts.quantity > 1 ? 1 : 0) } : carts
            )
        );
        setDisabled(false)
        DecrementToDb(_id);
        updateDb()
    }
    const updateDb = () => {
        if (_id === 0) {
            handleRemove(_id)
            removeFromDb(_id)
        }
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Row style={{
                borderBottom: '1px solid rgb(159 159 159)',
                margin: '10px 0',
                padding: '20px 0'
            }} className="cartRow">

                <Col md={6} sm={6} xs={12}>
                    <Row className="imageAndTitle">
                        <Col xs={6} md={2}>
                            <img src={img} alt="" className='cartImage img-fluid' />
                        </Col>
                        <Col xs={12} md={6} style={{
                            textAlign: 'start',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItem: 'center',
                            flexDirection: 'column'
                        }}>
                            <Link style={{
                                color: '#303030', fontSize: '16px',
                                textDecoration: 'none'
                            }} to={`/details/${_id}`}>
                                <h5 style={{ fontSize: '16px' }}>{title}</h5>
                            </Link>
                            <p style={{ fontSize: '12px' }}>Product Code: {_id}</p>
                        </Col>
                        <Col md={2}>
                            <Button className="removeButton" variant="light" onClick={handleShow}>
                                <svg style={{
                                    color: 'red',
                                    cursor: 'pointer'
                                }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="30px"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                            </Button>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body>
                                    Are you sure want to remove this product from the cart?
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        No
                                    </Button>
                                    <Button variant="primary" onClick={() => { handleRemove(_id) }}>Yes</Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                </Col>

                <Col md={6} sm={6} xs={12} className="quantityAndPriceCol">
                    <Row className="quantityAndPrice">
                        <Col xs={6} md={4} style={{

                            display: 'flex',
                            justifyContent: 'center',
                            alignItem: 'center',

                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} >
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <button className='mobileDecrement'
                                        disabled={quantity === 1}
                                        onClick={() => { handleDecrement(_id) }}> <i className="fas fa-minus"></i> </button>
                                    <input className='quantityInput' type="text" value={quantity} />
                                    {/* <p>{quantity}</p> */}
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', fontSize: '26px',
                                        border: '#f3f3f3',
                                    }}>
                                        <button className='increment' onClick={() => { handleIncrement(_id) }}> <i className="fas fa-plus"></i> </button>
                                        <button className='decrement' style={{
                                            fontSize: '11px',
                                            border: 'none',
                                            width: '25px', margin: '0'
                                        }} disabled={quantity === 1} onClick={() => { handleDecrement(_id) }}> <i className="fas fa-minus"></i> </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '20px 0'
                        }}>
                            <p>${price}</p>
                        </Col>
                        <Col xs={6} md={4} className="subtotalAndRemove">

                            <i className="fa-solid fa-xmark"></i>
                            <p> ${subtotalPrice.toFixed(2)}


                                <Button variant="light" onClick={handleShow}>
                                    <svg style={{
                                        color: 'red',
                                        cursor: 'pointer'
                                    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="30px"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                                </Button>

                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Are you sure want to remove this product from the cart?
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            No
                                        </Button>
                                        <Button variant="primary" onClick={() => { handleRemove(_id) }}>Yes</Button>
                                    </Modal.Footer>
                                </Modal>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Carts