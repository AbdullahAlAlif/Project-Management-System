import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[55%]  my-5 w-full flex flex-items-center  justify-start gap-5 flex-nowrap overflow-x-auto'>
        {data.tasks.map((task) => {
          if (task.status.active) {
            return <AcceptTask key={task.taskNumber} task={task} />
           }
          if (task.status.newTask) {
            return <NewTask key={task.taskNumber} task={task} />  
          }
          if (task.status.completed) {
            return <CompleteTask key={task.taskNumber} task={task} />  
          }
          if (task.status.failed) {
            return <FailedTask key={task.taskNumber} task={task} />  
          }
        })}
    </div>
  )
}

export default TaskList