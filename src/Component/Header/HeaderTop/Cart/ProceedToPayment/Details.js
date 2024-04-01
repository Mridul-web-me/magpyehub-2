import React from 'react';

const Details = ({ address }) => {
    const { name, email, phone, townCity, country, postcode } = address
    return (
        <>
            <div style={{
                textAlign: 'start'
            }}>
                <h4>{name}</h4>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{townCity} {country} {postcode}</p>
            </div>
        </>
    )
};

export default Details;
