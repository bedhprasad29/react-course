import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, loginUser } from "../../features/UserSlice";

export default function Login() {
    const navigate = useNavigate()
    const initialValue = {
        username: '',
        password: ''
    }

    const [cred, setCred] = useState(initialValue)
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    // const loginStatus = useSelector((state) => state.users.status);
    const loginError = useSelector((state) => state.users.error);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch, loggedInUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCred((prevCred) => ({
            ...prevCred,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(cred));
    };

    if (loggedInUser) {
        navigate('/')
    }

    return (
        <>
            <h2>Welcome to Blog Exporer </h2>

            {loginError && <div className="text-danger">{loginError}</div>}
            <form onSubmit={handleSubmit} style={{ width: "30%", margin: "auto" }}>
                <div className="form-floating mb-3 mt-2">
                    <input type="text" className="form-control" name="username" value={cred?.username} onChange={handleChange} />
                    <label htmlFor="text">Username</label>
                </div>
                <div className="form-floating mb-3 mt-2">
                    <input type="password" className="form-control" name="password" value={cred?.password} onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                </div>
                {/* {error && <p>Invalid Credentials.</p>} */}
                <button type="submit" className="btn btn-primary">Login</button>
                <p>Not yet registered ! <Link to={'/register'}>Register</Link></p>
            </form>
        </>
    )
}