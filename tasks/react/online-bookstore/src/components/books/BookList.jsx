import { useEffect, useState } from "react"
import Book from "./Book"
import { fetchBooks } from "../../services/api"

export default function BookList() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            const books = await fetchBooks();
            setBooks(books);
        }

        fetchAllBooks()
    }, [])

    return (
        <>
            <h1>Book Lists</h1>
            <div className="row m-4">
                {books.map((book) => {
                    return (
                        <Book book={book} />
                    )
                })}
            </div>
        </>
    )
}