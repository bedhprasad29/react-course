import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BooksList from './BookList';
import { fetchBookData } from '../redux/BookSlice';
import CreateBook from '../components/CreateBook';

const HomePage = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);
    const status = useSelector((state) => state.books.status);
    const error = useSelector((state) => state.books.error);

    const [createBook, setCreateBook] = useState(false);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBookData()); // Dispatch the async thunk action
        }
    }, [dispatch, status]);

    return (
        <>
            <div>
                <h1 className="text-center">Online Bookstore Homepage</h1>
                <button className="text-end mb-2" onClick={() => { setCreateBook(true) }}> Create Book</button>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error: {error}</p>}
                {status === 'succeeded' && <BooksList books={books} />}
            </div>
            {createBook && <CreateBook />}
        </>
    );
};

export default HomePage;
