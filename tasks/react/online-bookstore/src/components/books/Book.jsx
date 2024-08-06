import { deleteBook, fetchBooksById } from "../../services/book"
import { useNavigate } from 'react-router-dom';

export default function Book({ book, setBooks }) {
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/books/${id}`);
    };

    const handleUpdate = async (id) => {
        const result = await fetchBooksById(id);
        console.log(result);
    }

    const handleDelete = async (id) => {
        try {
            const result = await deleteBook(id);
            setBooks((prevBooks) => prevBooks.filter(book => book.id !== id));
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    return (
        // <div key={book.id} className="col-3 mb-1">
        //     <div className="card" >
        //         <img src={book.coverImage} className="card-img-top" alt={book.title} height="200px" />
        //         <div className="card-body">
        //             <h5 className="card-title">{book.title}</h5>
        //             <p className="card-text">{book.description}</p>
        //         </div>
        //         <button className="btn btn-primary" onClick={() => handleDetails(book.id)}>Details</button>
        //     </div>
        //     <button type="button" className="btn btn-primary" onClick={() => handleUpdate(book.id)}>Edit</button>
        //     <button type="button" className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
        // </div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    )
}