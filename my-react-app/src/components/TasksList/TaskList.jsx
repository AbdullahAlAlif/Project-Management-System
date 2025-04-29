import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%]  my-5 w-fullflex flex-items-center  justify-start gap-5 flex-nowrap overflow-x-auto'>
        <div className="h-full w-[300px] bg-emerald-700 rounded-xl flex-shrink-0 p-5">
            <div className='flex justify-between items-center p-5'>
                <h3 className='bg-red-500 px-3 py-1 rounded '>High</h3>
                <h4 className='test-sm'>20 feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtue video</h2>
            <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore voluptatum similique eveniet dolore dignissimos expedita eos non possimus veniam. Libero voluptas quis ipsum repellat excepturi? Dolores fuga iure ad?</p>
        </div>
        
    </div>
  )
}

export default TaskList