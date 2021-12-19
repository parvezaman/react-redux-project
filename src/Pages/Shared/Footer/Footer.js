import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <div className='d-flex flex-column justify-content-center align-items-center mx-auto'>
                    <h3 className='text-white'>Md.Amanullah Parvez</h3>
                    <p className='text-white'>emailtoamanullah@gmail.com</p>
                </div>
            </Container>
        </Navbar>
    );
};

export default Footer;