import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { currentUser } = useAuth();
  const nav = useNavigate();
  useEffect(() => {
    if (!currentUser) nav("/auth/sign-in");
  });
  if (!currentUser) return null;
  return <Outlet />;
};
export default ProtectedRoute;
