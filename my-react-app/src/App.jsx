import React, { useContext, useState, useEffect } from 'react'
import Login from "./components/Auth/Login"
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'




function App() {
const [user, setUser] = useState(null); // State to track user type
const authData = useContext(AuthContext) // Get the auth data from context
const [LoggedInUserData, setLoggedInUserData] = useState(null)


const handleLogin = (email, password) => {
  
  if (authData && authData.admin.email === email && authData.admin.password === password) {
    setUser("admin"); 
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" })); // Store logged-in user in localStorage

  } else if (authData) {
    const employee = authData.employees.find(emp => emp.email === email && emp.password == password)
    if (employee) {
      setUser("employee");
      //setLoggedInUserData(employee); 
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" , data : employee})); // Fixed incorrect role value
      setLoggedInUserData(employee);
    }
    

  } else {
    alert("Invalid credentials");
  }
};


// Update LoggedInUserData when authData changes => for tracking employee dashboard changes 
useEffect(() => {
  if (authData && user === 'employee') {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.data) {
      // Find the updated employee data from authData
      const updatedEmployee = authData.employees.find(emp => emp.id === loggedInUser.data.id);
      if (updatedEmployee) {
        setLoggedInUserData(updatedEmployee);
        // Update the localStorage with new data
        localStorage.setItem("loggedInUser", JSON.stringify({ 
          role: "employee", 
          data: updatedEmployee 
        }));
      }
    }
  }
}, [authData]); // This will run whenever authData changes


//Check if user is logged in after authentication or authData changes
useEffect(() => {
  if (authData) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser); // Parse the stored user object
      setUser(parsedUser.role); // Set the user state based on local storage
      setLoggedInUserData(parsedUser.data || null); //  Set the user data from localStorage
    } else {
      setUser(null); // No user logged in
      setLoggedInUserData(null); // Clear LoggedInUserData when no user is logged in
    }
  }
}, [authData, user]); // Run this effect when authData or user changes


  return (
    <>
     
     {!user && <Login handleLogin={handleLogin} />}
    {user === 'employee' && LoggedInUserData ? ( // Only render EmployeeDashboard when LoggedInUserData is not null.
      <EmployeeDashboard changeUser ={setUser} data={LoggedInUserData} />
    ) : null}
    {user === 'admin' && <AdminDashboard changeUser ={setUser}  />}
    </>
  );
}


export default App
