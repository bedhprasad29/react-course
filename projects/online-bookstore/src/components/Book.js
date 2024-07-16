// src/components/Book.js
import { useState } from 'react';
import BookModal from './BookModal';

const Book = ({ book }) => {
    const [selectedBook, setSelectedBook] = useState(null)

    return (
        <>
            <div className="card">
                {/* <img src={book.coverImage} className="card-img-top" alt={book.title} /> */}
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                </div>
                <button className='btn btn-secondary' onClick={() => setSelectedBook(book.id)}>More Details</button>

            </div>
            {selectedBook && <BookModal book={book} onClose={() => setSelectedBook(null)} />}
        </>
    );
};

export default Book;