import React from 'react'
import { faker } from '@faker-js/faker'

function Comment({ comment }) {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="card shadow-0 border" style={{ backgroundColor: "#f0f2f5" }}>
                    <div className="card-body p-4">
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" id="addANote" className="form-control" placeholder="Type comment..." />
                            <label className="form-label" for="addANote">+ Add a note</label>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <p>Type your note, and hit enter to add it</p>

                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <img src={faker.image.urlLoremFlickr({ category: 'nature' })} alt="avatar" width="25"
                                            height="25" />
                                        <p className="small mb-0 ms-2">{comment?.name}</p>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <p className="small text-muted mb-0">Upvote?</p>
                                        <i className="far fa-thumbs-up ms-2 fa-xs text-body" style={{ marginTop: "-0.16rem" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
