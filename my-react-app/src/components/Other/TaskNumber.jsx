import React from 'react'

const TaskNumber = ()=> {
  return (
    <div className='flex justify-between  gap-5 w-screen'>
        <div className='rounded-xl w-[45%] p-10 bg-red-400'>
        <h2 className='text-2xl font-bold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskNumber