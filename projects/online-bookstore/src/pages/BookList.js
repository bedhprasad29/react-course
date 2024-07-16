// src/components/BooksList.js
import Book from '../components/Book';

const BooksList = ({ books }) => {
    return (
        <div className="container">
            <div className="row">
                {books.map((book) => (
                    <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
                        <Book book={book} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksList;