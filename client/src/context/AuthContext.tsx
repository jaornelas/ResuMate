import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (data: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (data: any) => {
        setIsAuthenticated(true);
        // Optionally store user data in localStorage or state
    };

    const logout = () => {
        setIsAuthenticated(false);
        // Optionally remove user data from localStorage or state
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
