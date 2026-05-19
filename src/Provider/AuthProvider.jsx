import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    console.log(loading, user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser) => {
            setUser(createUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authDate = {
        user,
        setUser,
        createUser,
        logOut,
        signInUser,
        loading,
        setLoading,
    };

    return (
        <AuthContext value={authDate}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;