import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  //creatign user for with pass email;
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    createUser,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
