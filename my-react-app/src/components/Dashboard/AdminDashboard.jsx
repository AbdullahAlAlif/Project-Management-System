import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen p-6">
      <Header />
      <div className='flex items-center justify-center my-5 text-2xl'>Create Task</div>
      <CreateTask />
      <div className='flex items-center justify-center mt-5 text-2xl'>All Tasks</div>
      <AllTask />
    </div>
  );
}

export default AdminDashboard