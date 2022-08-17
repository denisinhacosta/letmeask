import { createContext, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
    const value = useContext(AuthContext)

    return value;
}