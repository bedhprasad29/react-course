function BookModal({ book, onClose }) {
    return (
        <div className='book-detail'>
            <button onClick={onClose}>Close</button>
            <h2>{book?.title}</h2>
            <span>{book?.genre}</span>
            <p className='text-right'>Price : {book?.price}</p>
            <hr />
            <p>{book?.description}</p>
        </div>
    )
}

export default BookModal