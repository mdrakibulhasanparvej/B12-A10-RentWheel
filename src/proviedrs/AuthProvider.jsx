import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  //creatign user for with pass email;
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUser = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  };

  // check firebase for existing user - before login
  const checkExistingUser = (email) => {
    setLoading(true);
    return fetchSignInMethodsForEmail(auth, email);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with google
  const googlelogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // getting user data form DB
  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscrib();
    };
  }, []);

  // logout
  const logout = () => {
    return signOut(auth);
  };

  const authData = {
    createUser,
    updateUser,
    googlelogin,
    checkExistingUser,
    login,
    setUser,
    user,
    logout,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
