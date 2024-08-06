import { useState } from "react";
import { Link } from "react-router-dom";
import { validateUser } from "../../services/user";

export default function Login() {
    const [cred, setCred] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCred((prevCred) => ({
            ...prevCred,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateUser(cred)
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: "30%", margin: "auto" }}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name="email" value={cred?.email} className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" value={cred?.password} className="form-control" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p>Not yet registered ! <a> <Link to={'/register'}>Register</Link></a></p>
            </form>
        </>
    )
}

// Hydration cycle in NextJS SSR
// Static site generation // SSG and ISG
// getStaticProps, getStaticPaths (if using pagination)