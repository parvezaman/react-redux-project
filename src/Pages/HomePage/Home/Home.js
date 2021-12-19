import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    const [allBooks, setAllBooks] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('https://fierce-sea-38013.herokuapp.com/allbooks')
            .then(res => res.json())
            .then(data => {
                setAllBooks(data)
                console.log(data)
            })
    }, []);

    const handleHireThisBook = id => {
        const url = `/hire/${id}`;
        history.push(url);
    }
    return (
        <div>
            <div className='home-land'>
                <h3>This is a book renting website. </h3>
                <br />
                <h1>Innal Hamdalillah!</h1>
                <h3>Wassalatu Assalamu 'Ala Rasulillah</h3>
                <br />
                <h5>Look! I got for example 100 books. I do not read all these books at once! So i decided to help out other brothers and sisters throughout the world with providing books to read!</h5>
                <br />
                <h5>What you just need to do is to choose which book you want to read and just provide your delivary address. Courier  service of course</h5>

                <br />
                <h5>You will need to provide the Courier Charge. You will be given 7 days to finish the book. Afterwards you will return the book on my address via Courier service again and you need to pay the charge. If you need extra time to read the book, please inform me via email</h5>
                <br />

                <h2>You do not have to pay any charge for the book hiring! Just the Courier service charge!!!</h2>

            </div>
            <Container>
                {
                    allBooks.map(book => <div key={book._id} className='d-lg-flex justify-content-around align-items-center'>
                        <div className='me-auto p-3'>
                            <img className='book-image' src={book.imageUrl} alt="" />
                        </div>
                        <div className='me-auto p-3'>
                            <hr />
                            <h3>{book.title}</h3>
                            <h6>{book.subTitle}</h6>
                            <hr />

                            <h2>{book.writter}</h2>

                            <br />

                            <p>{book.description}</p>

                            <br />

                            <button onClick={() => handleHireThisBook(book._id)} className='btn btn-primary'>Hire this book</button>
                        </div>
                    </div>)
                }
            </Container>
        </div>
    );
};

export default Home;