import React from 'react'
import AcceptTask from './AcceptTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[55%]  my-5 w-full flex flex-items-center  justify-start gap-5 flex-nowrap overflow-x-auto'>
        <AcceptTask  />
        <AcceptTask  />
        
    </div>
  )
}

export default TaskList