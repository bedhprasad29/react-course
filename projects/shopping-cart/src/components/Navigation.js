
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import NoPage from "./NoPage"
import Login from "./Login"
import Cart from "./Cart"
import Products from "./Products"
import Header from "./Header"
import Logout from "./Logout"
import Welcome from "./Welcome"

export default function Navigation() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="products" element={<Products />} />
                <Route path="cart" element={<Cart />} />
                <Route path="logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    )
}