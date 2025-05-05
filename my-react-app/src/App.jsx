import React, { useContext, useState } from 'react'
import Login from "./components/Auth/Login"
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {
const [user, setUser] = useState(null); // State to track user type
const [LoggedInUserData, setLoggedInUserData] = useState(null)
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

  } else if (authData) {
    const employee = authData.employees.find(emp => emp.email === email && emp.password == password)
    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" })); // Fixed incorrect role value
    }
    

  } else {
    alert("Invalid credentials");
  }
};


  return (
    <>
     
     {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard data={LoggedInUserData} />}
    </>
  );
}


export default App
