import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isSignIn, setIsSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
