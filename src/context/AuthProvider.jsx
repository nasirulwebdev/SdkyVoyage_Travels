import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  createContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===============================
  // Create User
  // ===============================
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // ===============================
  // Login User
  // ===============================
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // ===============================
  // Google Login
  // ===============================
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(
      auth,
      googleProvider
    );
  };

  // ===============================
  // Update Profile
  // ===============================
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // ===============================
  // Forgot Password
  // ===============================
  const resetPassword = (email) => {
    return sendPasswordResetEmail(
      auth,
      email
    );
  };

  // ===============================
  // Logout
  // ===============================
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ===============================
  // User Observer
  // ===============================
  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleLogin,
    updateUserProfile,
    logoutUser,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;