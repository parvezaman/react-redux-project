import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Registration = () => {
    return (
        <Container>
            <Row>
                <h1>Please Register a new Admin</h1>
                <Col md={5} sm={12} xm={12} className='mx-auto'>
                    <Form>
                        <Form.Group controlId='fullName' className='my-1'>
                            <Form.Control type="text" placeholder='Admin Name' />
                        </Form.Group>
                        <Form.Group controlId='adminEmail' className='my-2'>
                            <Form.Control type="email" placeholder='Email' />
                        </Form.Group>
                        <Form.Group controlId='adminPassword' className='my-2'>
                            <Form.Control type="password" placeholder='Type a password' />
                        </Form.Group>
                        <Form.Group controlId='conformPassword' className='my-2'>
                            <Form.Control type="password" placeholder='Re-type the password' />
                        </Form.Group>

                        <Button type='submit' variant='info'>Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;