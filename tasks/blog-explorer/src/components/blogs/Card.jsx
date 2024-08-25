import React, { useState } from 'react'
import { truncateString } from '../../helpers/string'
import { Link } from 'react-router-dom'
import { faker } from '@faker-js/faker'
import Button from 'react-bootstrap/Button'
import Details from './Details'

function Card({ post }) {
    const body = truncateString(post.body, 30)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // <div key={post.id} className='col-4 mb-3'>
        <div className="card col-4">
            <img className="card-img-top" src={faker.image.urlLoremFlickr({ category: 'nature' })} alt={post?.title} style={{ objectFit: "fill", height: "18rem" }} />
            <div className="card-body">
                <h5 className="card-title">{post?.title}</h5>
                <p className="card-text">{body}</p>
                {/* <Link className="btn btn-primary">Read More...</Link> */}
                {/* <button className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#blogDetails">Read More...</button> */}
                <Button variant="primary" onClick={handleShow} >
                    Details
                </Button>
            </div>
            <Details post={post} show={show} handleClose={handleClose} />
        </div>
        // </div>
    )
}

export default Card
