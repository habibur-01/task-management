import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import useAxiosPublic from '../Pages/hooks/useAxiosPublic';
import auth from '../Firebase/firebase.config';



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [ user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();
    // const axiosPublic = useAxiosPublic()

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    // Signin user
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            
        })
        return (() => {
            unSubscribe();
        })
    }, [])

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const info = {
        user,
        loading,
        createUser,
        userSignIn,
        signInWithGoogle,
        userSignOut
    }
    return (
        <AuthContext.Provider value={info}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;