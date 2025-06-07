import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[55%]  my-5 w-full flex flex-items-center  justify-start gap-5 flex-nowrap overflow-x-auto'>
        <AcceptTask  />
        <NewTask  />
        <CompleteTask/>
        <FailedTask/>
    </div>
  )
}

export default TaskList