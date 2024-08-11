import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const API = "http://localhost:3030";

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem('token', serverToken);
    };

    const isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem('token');
    };

    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // Fixed template literal usage here
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, [token]); // Added token to dependency array to re-fetch on token change

    return (
        <AuthContext.Provider value={{ API, isLoggedIn, isLoading, storeTokenInLS, LogoutUser, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    if (!AuthContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return AuthContextValue;
};
