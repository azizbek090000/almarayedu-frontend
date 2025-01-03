import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { logout } from "@/entities/auth/model";
import { TSession } from "@/shared/lib/types";

type AuthGuardProps = {
  children: ReactElement;
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: { auth: TSession }) => state);

  const isAuthenticated = auth.isAuthenticated;

  if (!isAuthenticated) {
    dispatch(logout());
    return <Navigate to="login" />;
  }

  return children;
};
