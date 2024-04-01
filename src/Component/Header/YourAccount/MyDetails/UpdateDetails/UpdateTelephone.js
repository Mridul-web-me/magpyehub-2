import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const UpdateTelephone = ({ update }) => {
    const { _id, telephone } = update
    console.log(_id)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [users, setUsers] = useState({});

    const handleTelephoneChange = e => {
        const telephone = e.target.value;
        const updatedTelephone = { telephone: telephone };
        setUsers(updatedTelephone)
    }
    const handleUpdateTelephone = e => {
        const url = `https://magpyehub-server.onrender.com/telephone/users/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully');
                    setUsers();
                }
            });


        e.preventDefault();
    }

    return (
        <div>
            <Button onClick={handleShow} >Update</Button>
            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Postcode <br />
                        telephone: {telephone} <br />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdateTelephone}>
                        <input onChange={handleTelephoneChange} type="text" placeholder='Town / City' />
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

export default UpdateTelephone