import React from 'react'

const CreatTask = () => {
  return (
    <div className="max-w-4xl mx-auto bg-[#2c2c2c] shadow-md rounded-md p-6">
<form className="flex flex-col space-y-6">
  <div className="flex justify-between space-x-10">
    <div className="flex flex-col gap-5 w-1/2">
      <div>
        <h3 className="text-lg font-semibold text-gray-400">Task Title</h3>
        <input
          type="text"
          placeholder="Make a UI design"
          className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-400">Date</h3>
        <input
          type="date"
          className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-400">Assign to</h3>
        <input
          type="text"
          placeholder="Employee name"
          className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-400">Category</h3>
        <input
          type="text"
          placeholder="Design, dev, etc"
          className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div className="flex flex-col gap-5 w-1/2">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-400">Description</h3>
        <textarea
          cols="30"
          rows="8"
          placeholder="Enter task description"
          className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[85%]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-4 bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition duration-300"
      >
        Create Task
      </button>
    </div>
  </div>
</form>
</div>
  )
}

export default CreatTask