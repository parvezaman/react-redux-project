import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Registration = () => {
    
    const [adminName, setAdminName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");


    const handleSubmit = e => {
        e.preventDefault();

        if (!email || !password || !adminName || !conformPassword) return toast.info("Please fill up all the fields", {theme:'colored'});
        if(password.length < 4) return toast.warn("Password must be at least 4 digit!", {theme:'colored'});
        if(password !== conformPassword) return toast.error("Password didn't match!", {theme:'colored'})
        
        console.log(adminName, email, password, conformPassword); 

    }

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
                            onChange={e=>setAdminName(e.target.value)} 
                            />
                        </Form.Group>
                        <Form.Group controlId='adminEmail' className='my-2'>
                            <Form.Control 
                            type="email" 
                            placeholder='Email' 
                            value={email} 
                            onChange={e=>setEmail(e.target.value)} 
                            />
                        </Form.Group>
                        <Form.Group controlId='adminPassword' className='my-2'>
                            <Form.Control 
                            type="password" 
                            placeholder='Type a password' 
                            value={password} 
                            onChange={e=>setPassword(e.target.value)} 
                            />
                        </Form.Group>
                        <Form.Group controlId='conformPassword' className='my-2'>
                            <Form.Control 
                            type="password" 
                            placeholder='Re-type the password' 
                            value={conformPassword} 
                            onChange={e=>setConformPassword(e.target.value)} 
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