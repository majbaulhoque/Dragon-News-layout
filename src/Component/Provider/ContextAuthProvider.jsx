import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);


const ContextAuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() =>{
        const unSubscribed = onAuthStateChanged(auth, (currentUser) =>{
            console.log('User in the state changed')
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribed()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAuthProvider;