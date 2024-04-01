// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../../../../img/logo.jpg'
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = useState('')

    const onSubmit = async data => {

        console.log('img', data);
        if (!data.img) {
            return toast.error('Please upload an image!');
        }
        const loading = toast.loading('Uploading...Please wait!')
        // let imageURL1 = "";
        console.log(data);
        let imageURL = [];
        if (data.img) {
            const imageData = new FormData();
            imageData.set('key', '510646b8b5fc9aed91f42f6150aeb22c')
            // imageData.append('image', data.img[0]);
            for (let i = 0; i < data.img.length; i++) {
                imageData.append('image', data.img[i])

                try {
                    const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
                    console.log(res)
                    imageURL = [...imageURL, res.data.data.display_url];
                    toast.dismiss(loading);
                } catch (error) {
                    toast.dismiss(loading);
                    return toast.error('Failed to upload the image!');
                }

            }


            const blogInfo = {
                title: data.title,
                category: data.category,
                price: data.price,
                img: imageURL[0],
                img1: imageURL[1],
                img2: imageURL[2],
                img3: imageURL[3],
                description: value,
                // img1: imageURL1,
                ProductUpdate: data.ProductUpdate,
            }


            console.log("Blogdata", blogInfo)
            axios.post('https://magpyehub-server.onrender.com/products', blogInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        alert('Product Added Successfully')
                        reset()

                    }
                })
            console.log(data);

            reset();
        }
    }
    const handleEditorSubmit = () => {
        reset()
    }

    console.log(value)

    return (
        <>
            <Helmet>
                <title>
                    Add Product
                </title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Col xs={4} md={4}>
                <Link to="/home" >
                    <img src={logo} style={{
                        margin: '15px 0'
                    }} alt="" className='img-fluid' width="200px" height="200px" />
                </Link>
            </Col>

            <Container>
                <Row>
                    <Col xs={6}>
                        <Form onSubmit={handleSubmit((onSubmit))} style={{
                            textAlign: 'start'
                        }} >
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                                <Form.Label column sm={4}>
                                    Title
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("title")} type="name" placeholder='title' required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                    Price
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("price")} type="text" placeholder='price' required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTownCity">
                                <Form.Label column sm={4}>
                                    category
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("category")} type="text" placeholder="category" required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                                <Form.Label column sm={4}>
                                    img
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("img")} placeholder="img " multiple type="file" />

                                </Col>
                            </Form.Group>
                            {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                                <Form.Label column sm={4}>
                                    Product Update
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("ProductUpdate")} placeholder="Product Update" type="text" />

                                </Col>
                            </Form.Group> */}

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                    Description
                                </Form.Label>
                                <Col sm={8}
                                >
                                    <ReactQuill
                                        {...register('description')}
                                        onChange={setValue}
                                        onSubmit={handleEditorSubmit}
                                    />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
            <p>

            </p>
        </>

    )
}

export default AddProduct
