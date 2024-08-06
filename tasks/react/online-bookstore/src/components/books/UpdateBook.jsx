import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { fetchBooksById, updateBook } from "../../services/book"
import toast, { Toaster } from 'react-hot-toast';

export default function UpdateBook() {
    const id = useParams().id;
    const [book, setBook] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookData = async () => {
            const response = await fetchBooksById(id);
            setBook(response[0])
        }

        fetchBookData();
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateBook(id, book)
        toast.success('Book updated successfully')
        navigate('/books')
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: "40%", margin: "auto" }}>
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
                    <button type="button" className="btn btn-secondary me-2">Close</button>
                    <button type="submit" className="btn btn-primary">Update Book</button>
                </div>
            </form>
            <Toaster position='top-right' />
        </>
    );
}
