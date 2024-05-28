import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);


const ContextAuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribed = onAuthStateChanged(auth, (currentUser) =>{
            console.log('User in the state changed')
            setUser(currentUser)
        })
        return () =>{
            unSubscribed()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAuthProvider;