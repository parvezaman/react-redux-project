import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {loginUser} from "../../../redux/ActionCreators/AuthAuctionCreator";
import { auth } from "../../../config/firebase";

const Registration = () => {

    const [adminName, setAdminName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    useEffect(()=>{
        if(!isLoggedIn){
            history.push("/admin/login")
        }
    },[]);

    const handleSubmit = e => {
        e.preventDefault();

        if (!email || !password || !adminName || !conformPassword) return toast.info("Please fill up all the fields", { theme: 'colored' });
        if (password.length < 4) return toast.warn("Password must be at least 4 digit!", { theme: 'colored' });
        if (password !== conformPassword) return toast.error("Password didn't match!", { theme: 'colored' })

        console.log(adminName, email, password, conformPassword);

        // Register the user
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                auth.currentUser.updateProfile({
                    displayName: adminName
                }).then(()=>{
                    const user = auth.currentUser;
                    // let us add data to the redux
                    const data ={
                        user: user.providerData[0],
                        id: user.uid
                    }
                    dispatch(loginUser(data));
                    toast.success("Successfully Admin registered!");
                    history.push("/admin/dashboard");
                }).catch(err=>{
                    console.log(err);
                })
             })
            .catch(err => {
                // toast.error(err.message)
                console.log(err);
            })


    };

    return (
        <Container>
            <Row>
                <h1>Please Register a new Admin</h1>
                <Col md={5} sm={12} xm={12} className='mx-auto'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='adminName' className='my-1'>
                            <Form.Control
                                type="text"
                                placeholder='Admin Name'
                                value={adminName}
                                onChange={e => setAdminName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='adminEmail' className='my-2'>
                            <Form.Control
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='adminPassword' className='my-2'>
                            <Form.Control
                                type="password"
                                placeholder='Type a password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='conformPassword' className='my-2'>
                            <Form.Control
                                type="password"
                                placeholder='Re-type the password'
                                value={conformPassword}
                                onChange={e => setConformPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button type='submit' variant='info'>Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;