import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import "./HireThisBook.css";

const HireThisBook = () => {
    const { id } = useParams();
    console.log(id);
    const { register, handleSubmit, reset } = useForm();

    const [book, setBook] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/allbooks/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, []);
    const { title, writter, copyright, description, imageUrl } = book;

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/testshipping', data)
        .then(res => {
            console.log(res);

            if(res.data.insertedId){
                alert("Thank You!!! Your booking is Submitted!");
                reset();
            }
        })
    };

    return (
        <Container>
            <div>
                <h3>You are hiring <span className='text-success'>{book.title}</span></h3>
            </div>
            <div>
                <br /><br />
                <img src={imageUrl} alt="" />
                <br />
                <br />
                <h5>{title}</h5>
                <br />
                <p>{description}</p>
                <br />
                <h3> {writter}</h3>
                <br />
                <p>{copyright}</p>
            </div>
            <div className='address-form'>
                <h1>Please provide your shipping info</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("bookName")} placeholder="Please enter the name of your desired Book" required />
                    <input {...register("name")} placeholder="Tell us your Name Please" required />
                    <input {...register("email")} placeholder="Tell us your email Please" required />
                    <textarea {...register("address")} placeholder="Please provide your shipping address" required />
                    <input className="btn btn-info" type="submit" />
                </form>
            </div>
        </Container>
    );
};

export default HireThisBook;