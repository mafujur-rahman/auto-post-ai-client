import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // create user
    const createuser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password);
    }

    // login user
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    
useEffect(()=>{
    const unSubscribe = onAuthStateChanged (auth, currentUser =>{
        setUser(currentUser);
        console.log("currentuser:",currentUser);
        setLoading(false);
    })
    return () =>{
        return unSubscribe();
    }
},[])
    const authInfo = {
        user,
        loading,
        createuser,
        login,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;