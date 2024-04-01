import React, { useState } from 'react'
import { Button, Card, Col, Modal } from 'react-bootstrap'
import useProduct from '../../../../hooks/Product/useProduct';
import { removeWishListFromDb } from '../../../../fakeDB'

const WishList = ({ wishList }) => {
    const { _id, img, title, price } = wishList
    const { handleAddToCart, handleWishListRemove, wishLists } = useProduct({})

    const handleDecrement = (_id) => {
        wishLists(cart =>
            cart.map((carts) =>
                _id === carts._id ? { ...carts, quantity: carts.quantity - (carts.quantity > 1 ? 1 : 0) } : carts
            )
        );

        updateWishListDb()
    }

    const updateCart = () => {
        handleAddToCart(wishList)
    }

    const updateWishListDb = () => {
        if (_id === 0) {
            handleWishListRemove(_id)
            removeWishListFromDb(_id)
        }

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Col>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure want to remove this product from the Wish List?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            No
                        </Button>
                        <Button variant="primary" onClick={() => { handleWishListRemove(_id) }}>Yes</Button>
                    </Modal.Footer>
                </Modal>
                <Button variant="light" onClick={() => { handleShow() }}>
                    <svg style={{
                        color: 'red',
                        cursor: 'pointer',
                        textAlign: 'end'
                    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="30px"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                </Button>
                <Card>
                    <Card.Img variant="top" src={img} height="300px" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Title>$ {price}</Card.Title>
                        <Button style={{ width: '100%' }} className='addToCartButton' variant="light" type='button' onClick={() => { updateCart() }}>Add To Basket</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default WishList