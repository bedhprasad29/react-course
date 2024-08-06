import { useEffect, useState } from "react"
import { fetchAllUsers } from "../../services/user"
import CreateUser from "./CreateUser"
// import { Link } from "react-router-dom"
// import toast, { Toaster } from 'react-hot-toast';


export default function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await fetchAllUsers();
            console.log(users)
            setUsers(users);
        }

        fetchUsers()
    }, [])

    // const handleDelete = async (id) => {
    //     const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    //     if (confirmDelete) {
    //         try {
    //             await deleteUser(id);
    //             setusers((prevUsers) => prevUsers.filter(user => user.id !== id));
    //             toast.success('User deleted successfully');
    //         } catch (error) {
    //             console.error("Error deleting User:", error);
    //         }
    //     }
    // };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center m-5">
                <h1>User Lists</h1>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createUser">Create</button>
            </div>
            <div className="row m-4">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {/* <span><Link to={`/users/${user.id}`} className="btn btn-primary me-1">View</Link></span>
                                    <span><Link to={`/users/update/${user.id}`} className="btn btn-primary me-1"> Edit</Link></span>
                                    <span className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</span> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CreateUser />
            {/* <Toaster position="top-right" /> */}
        </>
    )
}