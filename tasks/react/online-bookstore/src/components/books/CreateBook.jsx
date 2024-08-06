import { useState } from 'react';
import { createBook } from "../../services/book"
import { useNavigate } from 'react-router-dom';

export default function CreateBook() {
    const initialBook = {
        title: '',
        author: '',
        description: '',
        isbn: ''
    };

    const [book, setBook] = useState(initialBook);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(book)
        setBook(initialBook);
        navigate('/books')
    };

    return (
        <div className="modal fade" id="createBook" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Book</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Book Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={book.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="author" className="form-label">Author</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="author"
                                    name="author"
                                    value={book.author}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Book Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    value={book.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="isbn" className="form-label">Book ISBN</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="isbn"
                                    name="isbn"
                                    value={book.isbn}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
