import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateUser } from "../../services/user";

export default function Login() {
    const navigate = useNavigate()
    const initialValue = {
        email: '',
        password: ''
    }

    const [cred, setCred] = useState(initialValue)
    // const [error, setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCred((prevCred) => ({
            ...prevCred,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateUser(cred, navigate)
    };

    return (
        <>
            <h2>Welcome to Bookstore </h2>
            <form onSubmit={handleSubmit} style={{ width: "30%", margin: "auto" }}>
                <div className="form-floating mb-3 mt-2">
                    <input type="email" className="form-control" name="email" value={cred?.email} onChange={handleChange} />
                    <label htmlFor="email">Email address</label>
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

// Hydration cycle in NextJS SSR
// Static site generation // SSG and ISG
// getStaticProps, getStaticPaths (if using pagination)