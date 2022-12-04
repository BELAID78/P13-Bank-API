import { Navigate, Outlet } from "react-router-dom";
import { readUserData } from "../../utils/localStorageHelper";

function PrivateRoute() {
    const user = readUserData();

    if(user == null || !('authenticated' in user) || !user.authenticated) {
        return <Navigate to='/sign' />;
    }

    return (
        <Outlet />
    )
}

export default PrivateRoute