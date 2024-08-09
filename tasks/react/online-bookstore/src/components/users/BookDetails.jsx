import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchBooksById } from "../../services/book";

export default function BookDetails() {
    const id = useParams().id;

    const [book, setBook] = useState({})

    useEffect(() => {
        const fetchBookData = async () => {
            const response = await fetchBooksById(id);
            setBook(response[0])
        }

        fetchBookData();
    }, [id])

    return (
        <div className="card mt-4" style={{ width: "60%", margin: "auto" }}>
            <div className="card-header">
                <h1>{book?.title}</h1>
                <h3>{book?.author}</h3>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{book?.description}</li>
                <li className="list-group-item">{book?.isbn}</li>
                <li className="list-group-item">{book?.price}</li>
            </ul>
        </div>
    )
}
