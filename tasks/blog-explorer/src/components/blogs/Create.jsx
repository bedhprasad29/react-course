import { useState } from 'react';
import { createPost } from "../../services/posts"
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const initialPost = {
        title: '',
        author: '',
        description: '',
    };

    const [post, setPost] = useState(initialPost);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(post)
        setPost(initialPost);
        navigate('/blogs')
    };

    return (
        <div className="modal fade" id="createBlog" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Blog</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="title" name="title"
                                    value={post?.title} onChange={handleChange} required />
                                <label htmlFor='title'>Blog Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="author"
                                    name="author"
                                    value={post?.author}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="author">Author</label>
                            </div>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    placeholder="Add blog description here"
                                    value={post?.description}
                                    onChange={handleChange}
                                />
                                <label htmlFor="description" className="form-label">Blog Description</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Add Blog</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
