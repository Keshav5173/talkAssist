import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Auth Context
const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

// Organisation Context
const OrganisationContext = createContext();

export const useOrganisation = () => {
    return useContext(OrganisationContext);
};

export const OrganisationProvider = ({ children }) => {
    const [organisationId, setOrganisationId] = useState('');
    const [email, setEmail] = useState(false);

    const value = {
        organisationId,
        setOrganisationId, 
        email,
        setEmail
    };

    return (
        <OrganisationContext.Provider value={value}>
            {children}
        </OrganisationContext.Provider>
    );
};

// AuthProvider Component
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
            setUserName(user.displayName || "Unknown User");
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
            setUserName("");
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading,
        userName,
        setUserName
    };

    return (
        <AuthContext.Provider value={value}>
            <OrganisationProvider>
                {!loading && children}
            </OrganisationProvider>
        </AuthContext.Provider>
    );
}
