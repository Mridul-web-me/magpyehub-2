import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
const UpdateTitle = ({ product }) => {
    const { _id, title } = product

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [order, setOrder] = useState([]);

    const handleStatusChange = e => {
        const updateTitle = e.target.value;
        const updatedTitle = { title: updateTitle };
        setOrder(updatedTitle)
    }
    const handleUpdatePrice = e => {
        const url = `https://magpyehub-server.onrender.com/products/title/${_id}`
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
            <Button onClick={handleShow}>Update Title</Button>
            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Title <br />
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

export default UpdateTitle