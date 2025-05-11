import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        signUpUser,
        signInUser,
        setUser,
        signOutUser,
        user,
        loading
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe()
        }
    }, [])



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;