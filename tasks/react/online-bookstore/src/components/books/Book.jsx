
export default function Book({ book }) {
    return (
        <>
            <div key={book.id} className="col-3 mb-2">
                <div className="card" >
                    <img src={book.coverImage} className="card-img-top" alt={book.title} height="200px" />
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.description}</p>
                        {/* <a href="#" className="btn btn-primary">Details</a> */}
                    </div>
                </div>
            </div>
        </>
    )
}