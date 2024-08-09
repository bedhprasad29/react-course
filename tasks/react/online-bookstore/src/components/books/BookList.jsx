import { useEffect, useState } from "react";
import { fetchBooks, deleteBook } from "../../services/book";
import CreateBook from "./CreateBook";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { ShimmerTable } from "react-shimmer-effects";

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAllBooks = async () => {
            // setIsLoading(true);
            try {
                const books = await fetchBooks();
                setBooks(books);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
            // setIsLoading(false);
        };

        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            try {
                await deleteBook(id);
                setBooks((prevBooks) => prevBooks.filter(book => book.id !== id));
                toast.success('Book deleted successfully');
            } catch (error) {
                console.error("Error deleting book:", error);
                toast.error('Failed to delete book');
            }
        }
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center m-5">
                <h1>Book List</h1>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createBook">Create</button>
            </div>
            <div className="row m-4">
                {isLoading ? (
                    // <ShimmerTable row={4} col={4} />
                    <p>Loading...</p>
                ) : (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Actions</th>
                            </tr >
                        </thead >
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.id}>
                                    <th scope="row">{book.id}</th>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>
                                        <Link to={`/books/${book.id}`} className="btn btn-primary me-1">View</Link>
                                        <Link to={`/books/update/${book.id}`} className="btn btn-primary me-1">Edit</Link>
                                        <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
                }
            </div>
            <CreateBook />
            <Toaster position="top-right" />
        </>
    );
}
