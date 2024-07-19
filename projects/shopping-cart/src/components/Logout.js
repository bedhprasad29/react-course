import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Logout({ setIsLoggedIn }) {
    const [loggedOut, setLoggedOut] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setLoggedOut(true);
    };

    if (loggedOut) {
        return <Navigate to="/" />;
    }

    return <button onClick={handleLogout}>Logout</button>;
}
