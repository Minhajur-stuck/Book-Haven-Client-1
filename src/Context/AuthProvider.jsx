import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInGoogle = () => {
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
  };

  const signOutuser = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
     setUser(currentUser)
      setLoading(false)
    })

    return ()=>{
      unsubscribe()
    }
  },[])

  const authInfo = {
    signInGoogle,
    signOutuser,
    user,
    loading
  };
  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
