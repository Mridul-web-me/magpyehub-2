import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';

const MyFiles = () => {
    return <div>
        <Helmet>
            <title>
                MY Files
            </title>
            <meta name="description" content="This is Magpyehub Online Shop" />
        </Helmet>
        <Header></Header>
        <h2>MY FILES</h2>
        <p>View a list of files that are linked to your account</p>
        <h6>You currently don't have any files available to download.</h6>
        <Footer></Footer>
    </div>
};

export default MyFiles;
