import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const UpdatePostcode = ({ update }) => {
    const { _id, postcode } = update
    console.log(_id)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [users, setUsers] = useState({});

    const handlePostcodeChange = e => {
        const postcode = e.target.value;
        const updatedPostcode = { postcode: postcode };
        setUsers(updatedPostcode)
    }
    const handleUpdateTownCity = e => {
        const url = `https://magpyehub-server.onrender.com/postcode/users/${_id}`
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
                        Postcode: {postcode} <br />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdateTownCity}>
                        <input onChange={handlePostcodeChange} type="text" placeholder='Town / City' />
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

export default UpdatePostcode