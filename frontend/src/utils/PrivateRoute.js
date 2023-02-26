import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = () => {
  const { username } = useContext(AuthContext);
  return username ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
