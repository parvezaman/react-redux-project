import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from "../../../config/firebase";
import { loginUser } from '../../../redux/ActionCreators/AuthAuctionCreator';
// import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = e => {
        e.preventDefault();

        if (!email || !password) return toast.warn("Please fill up all the fields", { theme: 'dark' });
        if (password.length < 4) return toast.warn("Password must be at least 4 digit!");

        console.log(email, password);

        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user);
                const data = {
                    user: user.user.providerData[0],
                    id: user.user.uid
                }
                dispatch(loginUser(data));
                toast.success("Successfully logged in!");
                history.push("/admin/dashboard");
            })
            .catch(err => {
                toast.error("invalid email or password!")
            })

    }
    return (
        <Container>
            <Row>
                <h1>Please Login as an Admin</h1>
                <Col md={5} sm={12} xm={12} className='mx-auto'>
                    <Form onSubmit={handleSubmit}>
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

                        <Button type='submit' variant='info'>Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;