import { useEffect, useState } from 'react'
import { fetchAllPosts } from '../../services/blogs'
import { ShimmerTable } from 'react-shimmer-effects'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Create from './Create'

function List() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true)
                const posts = await fetchAllPosts()
                setPosts(posts)
                setIsLoading(false)
            } catch (error) {
                console.error("error fetching posts", error)
                setIsLoading(false)
            }
        }

        fetchPosts()
    }, [])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            try {
                // await deleteBook(id);
                setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
                toast.success('Book deleted successfully');
            } catch (error) {
                console.error("Error deleting book:", error);
                toast.error('Failed to delete book');
            }
        }
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center m-5">
                <h1>Blogs List</h1>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createBlog">Create</button>
            </div>
            <div className="row m-4">
                {isLoading ? (
                    <ShimmerTable row={4} col={4} />
                    // <p>Loading...</p>
                ) : (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Actions</th>
                            </tr >
                        </thead >
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id}>
                                    <th scope="row">{post.id}</th>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>
                                        {/* <Link to={`/posts/${post.id}`} className="btn btn-primary me-1">View</Link>
                                        <Link to={`/posts/update/${post.id}`} className="btn btn-primary me-1">Edit</Link> */}
                                        <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
                }
            </div>
            <Create />
            <Toaster position="top-right" />
        </>
    )
}

export default List
