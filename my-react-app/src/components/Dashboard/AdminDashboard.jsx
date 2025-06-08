import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask';
import EmployeeTaskPanel from '../Other/EmployeeTaskPanel';

const AdminDashboard = ({changeUser}) => {
  return (
    <div className="min-h-screen p-6">
      <Header changeUser={changeUser}/>
      <div className='flex items-center justify-center my-5 text-2xl'>Create Task</div>
      <CreateTask />
      <div className='flex items-center justify-center mt-5 text-2xl'>All Tasks</div>
      <EmployeeTaskPanel />
    </div>
  );
}

export default AdminDashboard