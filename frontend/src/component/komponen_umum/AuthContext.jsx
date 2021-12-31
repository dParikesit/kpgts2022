import { createContext } from "react";

export const AuthContext = createContext({
    name: "",
    role: "",
    addItem: () => {},
    removeItem: () => {},
});