import React from 'react'

const AcceptTask = () => {
  return (
<div className="h-full w-[300px] bg-emerald-700 rounded-xl flex-shrink-0 p-5">
    <div className='flex justify-between items-center p-5'>
        <h3 className='bg-red-500 px-3 py-1 rounded '>High</h3>
        <h4 className='test-sm'>20 feb 2025</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>make a youtue video</h2>
    <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore voluptatum similique eveniet dolore dignissimos expedita eos non possimus veniam. Libero voluptas quis ipsum repellat excepturi? Dolores fuga iure ad?</p>

    <div className='flex justify-between mt-4'>
        <button className='bg-green-600 py-1 px-2 text-sm'>Mark as Accepted</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
</div>
  )
}

export default AcceptTask