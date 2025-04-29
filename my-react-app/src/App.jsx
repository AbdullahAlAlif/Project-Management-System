import React, { useContext,useEffect,useState } from 'react'
import Login from "./components/Auth/Login"
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
const [user, setUser] = useState(null); // State to track user type

const authData = useContext(AuthContext) // Get the auth data from context

// Check if user is logged in after authentication or authData changes
// useEffect(() => {
//   if (authData) {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//       setUser(loggedInUser.role); // Set the user state based on local storage
//     } else {
//       setUser(null); // No user logged in
//     }
//   }
// }, [authData]); 
  

const handleLogin = (email, password) => {
  
  if (authData && authData.admin.email === email && authData.admin.password === password) {
    setUser("admin"); 
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" })); // Store logged-in user in localStorage

  } else if (authData && authData.employees.find(emp => emp.email === email && emp.password === password)) {
    setUser("user");
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "user" })); // Store logged-in user in localStorage 

  } else {
    alert("Invalid credentials");
  }
};


  return (
    <>
     
     {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'user' && <EmployeeDashboard />}
    </>
  );
}


export default App
