import { useEffect, useState } from "react"
import { fetchBooks, deleteBook } from "../../services/book"
import CreateBook from "./CreateBook"
import { Link } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';


export default function BookList() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            const books = await fetchBooks();
            setBooks(books);
        }

        fetchAllBooks()
    }, [])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            try {
                await deleteBook(id);
                setBooks((prevBooks) => prevBooks.filter(book => book.id !== id));
                toast.success('Book deleted successfully');
            } catch (error) {
                console.error("Error deleting book:", error);
            }
        }
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center m-5">
                <h1>Book Lists</h1>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createBook">Create</button>
            </div>
            <div className="row m-4">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id}>
                                <th scope="row">{book.id}</th>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>
                                    <span><Link to={`/books/${book.id}`} className="btn btn-primary me-1">View</Link></span>
                                    <span><Link to={`/books/update/${book.id}`} className="btn btn-primary me-1"> Edit</Link></span>
                                    <span className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CreateBook />
            <Toaster
                position="top-right" />
        </>
    )
}