import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    const [allBooks, setAllBooks] = useState([]);
    const history = useHistory();
    useEffect(()=>{
        fetch('http://localhost:5000/allbooks')
        .then(res => res.json())
        .then(data => {
            setAllBooks(data)
            console.log(data)
        })
    },[]);

    const handleHireThisBook = id =>{
        const url = `/hire/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
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

                            <button onClick={()=>handleHireThisBook(book._id)} className='btn btn-primary'>Hire this book</button>
                        </div>
                    </div>)
                }
            </Container>
        </div>
    );
};

export default Home;