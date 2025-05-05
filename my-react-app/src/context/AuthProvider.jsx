import React, { useState, useEffect } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage() || {};
    setUserData({ employees, admin });
  }, []); // Initialize userData when the component mounts : Since we want all the values from localStorage to be used in the entire app, we can set the userData state in the useEffect hook when the component mounts which in main js we see its at the very start abd we use these data to validate user in login and show them in DashBoard.

  return <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;