import React from 'react'

const TaskStatusTracker = ({data})=> {
  const colors = ['bg-purple-400', 'bg-blue-500', 'bg-green-600','bg-red-400'];
  
  return (
    <div className='flex justify-between gap-5 w-screen'>
      {Object.entries(data.taskCount ?? {}).map(([key, value], index) => (
        <div key={key} className={`rounded-xl w-[45%] p-10 ${colors[index % colors.length]}`}>
          <h2 className='text-2xl font-bold'>{value}</h2>
          <h3 className='text-xl font-medium'>{key}</h3>
        </div>
      ))}
    </div>
  )
}

export default TaskStatusTracker