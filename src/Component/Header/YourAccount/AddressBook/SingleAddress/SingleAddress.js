
import React from 'react';

const SingleAddress = ({ address }) => {
    const { displayName, country, postcode, townCity, telephone, phone } = address

    return (
        <>
            <div style={{
                textAlign: 'start'
            }}>
                <h2>{displayName}</h2>
                <p>{townCity} {country} {postcode}</p>
                <p></p>
                <p></p>
                <p>Telephone: {telephone}</p>
                <p>Phone: {phone}</p>
            </div>
        </>
    )
};

export default SingleAddress;