import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const UpdatePrice = ({ product }) => {
    const { _id, title } = product

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [order, setOrder] = useState([]);

    const handleStatusChange = e => {
        const updatePrice = e.target.value;
        const updatedPrice = { price: updatePrice };
        setOrder(updatedPrice)
    }
    const handleUpdatePrice = e => {
        const url = `https://magpyehub-server.onrender.com/products/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully');
                    setOrder({});
                }
            });


        e.preventDefault();
    }

    return (
        <div>
            <Button onClick={handleShow}>Update Price</Button>
            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Price <br />
                        Title: {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdatePrice}>
                        <input onChange={handleStatusChange} type="text" />
                        <input type="submit" value='Update' />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UpdatePrice