import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


const Login = () => {
    return (
        <Container>
            <Row>
                <h1>Please Login as an Admin</h1>
                <Col md={5} sm={12} xm={12} className='mx-auto'>
                    <Form>
                        <Form.Group controlId='adminEmail' className='my-2'>
                            <Form.Control type="email" placeholder='Email' />
                        </Form.Group>
                        <Form.Group controlId='adminPassword' className='my-2'>
                            <Form.Control type="password" placeholder='Type a password' />
                        </Form.Group>

                        <Button type='submit' variant='info'>Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;