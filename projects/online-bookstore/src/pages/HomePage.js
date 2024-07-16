import BooksList from "./BookList";
import { useState, useEffect } from 'react'
import { fetchBooks } from "../services/api";
import CreateBook from "../components/CreateBook";

const HomePage = () => {
    const [books, setBooks] = useState([])
    const [createBook, setCreateBook] = useState(false)

    useEffect(() => {
        async function getAllBooks() {
            try {
                const books = await fetchBooks();
                setBooks(books)
            } catch (error) {
                console.log('Error in fetching books : ', error);
            }
        }
        getAllBooks()
    }, [])

    return (
        <>
            <div>
                <h1 className="text-center">Online Bookstore Homepage</h1>
                <button className="text-end mb-2" onClick={() => { setCreateBook(true) }}> Create Book</button>
                <BooksList books={books} />
            </div>
            {createBook && <CreateBook />}
        </>
    );
};

export default HomePage;