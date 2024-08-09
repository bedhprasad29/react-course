import { useState } from 'react';
import { createUser } from '../../services/user';

export default function CreateUser() {
    const initialValue = {
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: ''
    }
    const [user, setUser] = useState(initialValue)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            createUser(user)
            setUser(initialValue)
        } catch (error) {
            console.error('Unable to create user: ', error)
        }
    }

    return (
        <div className="modal fade" id="createUser" tabIndex="-1" aria-labelledby="createuser" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="createuser">Create User</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="username" value={user?.username} onChange={handleChange} autoComplete="off" required />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" name="email" value={user?.email} onChange={handleChange} autoComplete="off" required />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" name="phone" value={user?.phone} onChange={handleChange} />
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Select Role">
                                    <option defaultValue={user?.role}>Choose Role</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                                <label htmlFor="floatingSelect">Select Role</label>
                            </div>
                            <div className="form-floating mb-3 mt-2">
                                <input type="password" className="form-control" name="password" value={user?.password} onChange={handleChange} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-floating mb-3 mt-2">
                                <input type="password" className="form-control" name="confirm_password" value={user?.confirmPassword} onChange={handleChange} />
                                <label htmlFor="confirm_password">Confirm Password</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Create</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setUser(initialValue)}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
