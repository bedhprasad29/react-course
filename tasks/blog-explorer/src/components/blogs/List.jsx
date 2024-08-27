import { useEffect, useMemo, useState } from 'react'
import { ShimmerTable } from 'react-shimmer-effects'
import toast, { Toaster } from 'react-hot-toast'
import Create from './Create'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/features/PostSlice'
import Edit from './Edit'
import Button from 'react-bootstrap/Button'

function List() {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.posts.posts)
    const status = useSelector(state => state.posts.status)
    const [posts, setPosts] = useState(allPosts)
    const [filterTitle, setFilterTitle] = useState('')
    const [editModal, setEditModal] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);

    const handleEditClick = (post) => {
        setCurrentPost(post);
        setEditModal(true);
    };

    const handleFormCloseModal = () => {
        setEditModal(false);
        setCurrentPost(null);
    };

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts())
        }
    }, [status, dispatch])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            try {
                setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
                toast.success('Book deleted successfully');
            } catch (error) {
                console.error("Error deleting book:", error);
                toast.error('Failed to delete book');
            }
        }
    };

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => post.title.toLowerCase().includes(filterTitle.toLowerCase()))
    }, [posts, filterTitle])

    return (
        <>
            <div className="d-flex justify-content-between align-items-center m-5">
                <h1>Blogs List</h1>
                <div>
                    <input type="text" className='p-1 rounded' placeholder='Search Title' value={filterTitle} onChange={(e) => setFilterTitle(e.target.value)} />
                    <button className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#createBlog">Create</button>
                </div>
            </div>
            <div className="row m-4">
                {status === 'idle' ? (
                    <ShimmerTable row={4} col={4} />
                ) : (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Actions</th>
                            </tr >
                        </thead >
                        <tbody>
                            {filteredPosts?.map((post) => (
                                <tr key={post.id}>
                                    <th scope="row">{post.id}</th>
                                    <td>{post.title}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => handleEditClick(post)}> Edit </Button>
                                        <button className="btn btn-danger ms-2" onClick={() => handleDelete(post.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
                }
            </div>
            <Create />
            <Edit show={editModal}
                handleClose={handleFormCloseModal}
                title={currentPost?.title}
                body={currentPost?.body} />
            <Toaster position="top-right" />
        </>
    )
}

export default List
