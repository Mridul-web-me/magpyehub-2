import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import SingleAddress from './SingleAddress/SingleAddress';
import { Helmet } from 'react-helmet';

const AddressBook = (props) => {


    const { user } = useAuth()
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://magpyehub-server.onrender.com/users?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => {
                setProfile(data.data)
                setLoading(false)
            });
    }, [user.email])

    return (
        <>
            <Helmet>
                <title>
                    Address Book
                </title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>

            <h4>ADDRESS BOOK</h4>
            <Container>
                {<Row>
                    {loading ? <div>loading</div> :
                        profile.map(address =>
                            <SingleAddress
                                key={address._id}
                                address={address}
                            >

                            </SingleAddress>)
                    }
                </Row>}
            </Container>
            <Footer></Footer>
        </>
    );
}

export default AddressBook;
