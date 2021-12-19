import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1 className='text-warning'>All Orders</h1>
            {
                orders.map(order =><Container>
                    <div className='border border-secondary mb-2 rounded-pill'>
                        <h3>{order.bookName}</h3>
                        <p>{order.email}</p>
                        <p>{order.address}</p>
                    </div>
                </Container>)
            }
        </div>
    );
};

export default AllOrders;