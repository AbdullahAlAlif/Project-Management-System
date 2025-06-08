import React from 'react'

const NewTask = ({data}) => {
    

    return (
        <div className="h-full w-[300px] bg-gray-800 rounded-xl flex-shrink-0 p-5 shadow-lg">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-600 text-white px-3 py-1 rounded">{data.taskCategory}</h3>
                <h4 className="text-sm text-gray-400">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
            <p className="mt-2 text-sm text-gray-300">
                {data.taskDescription || "No description provided for this task."}
            </p>

            <div className="flex justify-between mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 text-sm rounded">
                    Accept Task
                </button>
            </div>
        </div>
    );
};

export default NewTask