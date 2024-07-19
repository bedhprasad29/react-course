import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [user, setUser] = useState([]);

    const users = useSelector(state => state.users)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = users.filter(user => user.name === username)
        if (!user) {
            setError('Invalid Credentials')
        } else {
            console.log(user);
            setUser(user)
            setIsLoggedIn(true)
        }
    };

    return (
        user.length > 0 ? <Navigate to="/products" /> :
            <div className="container display-content">
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 ">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" id="" placeholder="name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="passwords" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
    );
}

export default Login