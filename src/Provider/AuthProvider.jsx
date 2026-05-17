import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = () => {

    const [user, setUser] = useState({
        name: "Farhan",
        email: 'ishrakrafaj@gmail.com'
    });

    const authDate = {
        user,
        setUser,
    };

    return (
        <AuthContext value={authDate}></AuthContext>
    );
};

export default AuthProvider;