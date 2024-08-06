
import { Link } from "react-router-dom"

export default function Register() {
    return (
        <>
            <form style={{ width: "30%", margin: "auto" }}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <p>Already registered ! <a> <Link to={'/login'}>Login</Link></a></p>
            </form>
        </>
    )
}

// Hydration cycle in NextJS SSR
// Static site generation // SSG and ISG
// getStaticProps, getStaticPaths (if using pagination)