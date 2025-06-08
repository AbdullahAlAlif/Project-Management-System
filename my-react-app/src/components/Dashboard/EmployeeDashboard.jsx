import React from 'react'
import Header from '../Other/Header'
import TaskStatusTracker from '../Other/TaskStatusTracker'
import TaskList from '../TasksList/TaskList'
function EmployeeDashboard({data, changeUser}) {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
    
      <Header data={data} changeUser={changeUser}/>
      <TaskStatusTracker data={data}/>
      <TaskList data={data}/>
    </div>  
  )
}

export default EmployeeDashboard