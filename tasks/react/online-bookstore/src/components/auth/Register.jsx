
import { useState } from "react"
import { Link } from "react-router-dom"
import { createUser } from "../../services/user"

export default function Register() {
    const initialValue = {
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'user'
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
        <>
            <h2 className="mt-2">Register Form</h2>
            <form onSubmit={handleSubmit} style={{ width: "30%", margin: "auto" }}>
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
                <div className="form-floating mb-3 mt-2">
                    <input type="password" className="form-control" name="password" value={user?.password} onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="form-floating mb-3 mt-2">
                    <input type="password" className="form-control" name="confirm_password" value={user?.confirmPassword} onChange={handleChange} />
                    <label htmlFor="confirm_password">Confirm Password</label>
                </div>
                <button type="submit" className="btn btn-primary me-2">Register</button>
                <button type="button" className="btn btn-secondary" onClick={() => setUser(initialValue)}>Reset</button>
                <p>Already registered ! <Link to={'/login'}>Login</Link></p>
            </form>
        </>
    )
}

// Hydration cycle in NextJS SSR
// Static site generation (SSG) and Incremental Static generation (ISG)
// getStaticProps, getStaticPaths (if using pagination)