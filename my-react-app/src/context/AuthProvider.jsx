import React, { useState, useEffect } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage() || {};
    setUserData({ employees, admin });
  }, []); // Initialize userData when the component mounts

  return <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;