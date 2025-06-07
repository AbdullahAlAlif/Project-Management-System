import React from 'react'

const CompleteTask = () => {
    return (
        <div className="h-full w-[300px] bg-gradient-to-r bg-gray-800  rounded-xl flex-shrink-0 p-5 shadow-lg">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-600 text-white px-3 py-1 rounded shadow">High</h3>
                <h4 className="text-sm text-gray-200">20 Feb 2025</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">Make a YouTube Video</h2>
            <p className="mt-2 text-sm text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore voluptatum similique eveniet dolore dignissimos expedita eos non possimus veniam. Libero voluptas quis ipsum repellat excepturi? Dolores fuga iure ad?
            </p>

            <div className="flex justify-between mt-4">
                <button className="bg-green-700 hover:bg-green-800 text-white py-1 px-2 text-sm rounded shadow">
                    Completed
                </button>
            </div>
        </div>
    );
};

export default CompleteTask