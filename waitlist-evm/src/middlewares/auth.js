import {Navigate, useLocation} from "react-router-dom";
import { isExpired } from "react-jwt";
import Cookies from "js-cookie";

function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation();
  const auth = Cookies.get('g7-auth');
  if(auth) {
    const { token } = JSON.parse(auth);
    const isTokenExpired = isExpired(token);
    if (isTokenExpired) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children
  }

  return <Navigate to="/" state={{ from: location }} replace />;
}

export default RequireAuth