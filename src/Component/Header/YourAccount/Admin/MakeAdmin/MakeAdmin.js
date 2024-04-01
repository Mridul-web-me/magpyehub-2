import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Header from '../../../Header'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import Newsletter from '../../../../Newsletter/Newsletter'
import Footer from '../../../../Footer/Footer'
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)


    const handleOnChange = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault()
        const user = { email }
        fetch('https://magpyehub-server.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    setSuccess(true);
                    // setEmail()
                    alert('Admin Added Success')
                }
            })

    }




    // MyVerticallyCenteredModal
    //     show={modalShow}
    //     onHide={() => setModalShow(false)}

    return (
        <div>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container>
                <form onSubmit={handleAdminSubmit}>
                    <input className="form-control me-2" required placeholder="Enter Admin Email Address" aria-label="Search" onChange={handleOnChange} />
                    <Button type='submit'>Make Admin</Button>
                </form>
            </Container>

            <Newsletter></Newsletter>
            <Footer></Footer>
        </div >
    )
}

export default MakeAdmin