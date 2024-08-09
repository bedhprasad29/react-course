import { Navigate } from "react-router-dom";

const RouteGuard = ({ component: Component, ...rest }) => {
    function hasJwt() {
        return !!localStorage.getItem("token");
    }

    return hasJwt() ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default RouteGuard;
