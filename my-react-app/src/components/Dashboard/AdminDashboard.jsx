import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask';
import EmployeeTaskPanel from '../Other/EmployeeTaskPanel';
import EmployeeList from '../Other/EmployeeList';

const AdminDashboard = ({changeUser}) => {
  return (
    <div className="min-h-screen p-6">
      <Header changeUser={changeUser}/>
      <div className='flex items-center justify-center my-5 text-2xl'>Create Task</div>
      <div className="flex gap-6">
        <div className="w-1/2">
          <CreateTask />
        </div>
        <div className="w-1/2">
          <EmployeeList />
        </div>
      </div>
      <div className='flex items-center justify-center mt-5 text-2xl'>All Tasks</div>
      <EmployeeTaskPanel />
    </div>
  );
}

export default AdminDashboard