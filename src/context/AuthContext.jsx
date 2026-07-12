import {
    createContext,
    useEffect,
    useState,
} from "react";

import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    sendPasswordResetEmail,
    updateProfile,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);



    // ===========================
    // Register
    // ===========================

    const register = async (email, password) => {

        setLoading(true);

        await setPersistence(
            auth,
            browserLocalPersistence
        );

        return createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

    };



    // ===========================
    // Login
    // ===========================

    const login = async (email, password) => {

        setLoading(true);

        await setPersistence(
            auth,
            browserLocalPersistence
        );

        return signInWithEmailAndPassword(
            auth,
            email,
            password
        );

    };



    // ===========================
    // Google Login
    // ===========================

    const googleLogin = async () => {

        setLoading(true);

        await setPersistence(
            auth,
            browserLocalPersistence
        );

        return signInWithPopup(
            auth,
            googleProvider
        );

    };



    // ===========================
    // Logout
    // ===========================

    const logout = () => {

        setLoading(true);

        return signOut(auth);

    };



    // ===========================
    // Forgot Password
    // ===========================

    const forgotPassword = (email) => {

        return sendPasswordResetEmail(
            auth,
            email
        );

    };



    // ===========================
    // Update Profile
    // ===========================

    const updateUserProfile = (profileData) => {

        return updateProfile(
            auth.currentUser,
            profileData
        );

    };



    // ===========================
    // Auth Observer
    // ===========================

    useEffect(() => {

        const unsubscribe =
            onAuthStateChanged(
                auth,
                (currentUser) => {

                    setUser(currentUser);

                    setLoading(false);

                }
            );

        return () => unsubscribe();

    }, []);




    // ===========================
    // Context Value
    // ===========================

    const authInfo = {

        user,

        loading,

        register,

        login,

        googleLogin,

        logout,

        forgotPassword,

        updateUserProfile,

    };




    return (

        <AuthContext.Provider
            value={authInfo}
        >

            {children}

        </AuthContext.Provider>

    );

};

export default AuthProvider;