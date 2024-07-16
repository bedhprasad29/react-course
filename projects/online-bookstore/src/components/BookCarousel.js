// src/components/BookCarousel.js
import React from 'react';

const BookCarousel = ({ books }) => {
    return (
        <div id="bookCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {books.map((book, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={book.coverImage} className="d-block w-100" alt={book.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCarousel;