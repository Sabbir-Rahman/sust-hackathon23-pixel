import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

type IProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: IProps) => {
  const { user } = useAuthContext();
  return <>{user ? children : <Navigate to="/" />}</>;
};

export default PrivateRoute;
