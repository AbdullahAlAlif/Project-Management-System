import React from 'react'

const TaskStatusTracker = ({data})=> {
  const colors = ['bg-gradient-to-r from-purple-400 to-purple-600', 'bg-gradient-to-r from-blue-500 to-blue-700', 'bg-gradient-to-r from-green-600 to-green-800', 'bg-gradient-to-r from-red-400 to-red-600'];
  if (!data || !data.taskCount) return null; // Prevent error if data or data.taskCount is null
  return (
    <div className='flex justify-between gap-5 w-screen'>
      {Object.entries(data.taskCount).map(([key, value], index) => (
        <div key={key} className={`rounded-xl w-[45%] p-10 ${colors[index % colors.length]}`}>
          <h2 className='text-2xl font-bold'>{value}</h2>
          <h3 className='text-xl font-medium'>{key}</h3>
        </div>
      ))}
    </div>
  )
}

export default TaskStatusTracker