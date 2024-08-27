import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from '../blogs/List';
import BlogDetails from '../blogs/Details';
import Login from '../auth/Login';
import Error404 from '../errors/Error404';
import Home from '../layout/Home';
import UserList from '../users/List';
import Register from '../auth/Register';
// import RouteGuard from '../RouteGuard';
import { Navbar } from './Navbar';
import Profile from '../auth/Profile';

export default function Header() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    {/* <Route path='/' element={<RouteGuard component={Home} />} /> */}
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/users' element={<UserList />} /> */}
                    <Route path='/blogs' element={<BlogList />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                    {/* <Route path="/books/update/:id" element={<UpdateBook />} /> */}
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </Router>
        </>
    )
}
