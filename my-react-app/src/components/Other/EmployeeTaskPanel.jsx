import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import '../../styles/EmployeeTaskPanel.css'; //custom scrollbar styles

const EmployeeTaskPanel = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 max-h-[70vh] overflow-y-auto text-white space-y-4 custom-scrollbar">
      {authData.employees.map((employee) => (
        <div
          key={employee.id}
          className="bg-[#2a2a2a] rounded-lg p-4 shadow-md border border-gray-700"
        >
          <div className="flex justify-between items-start mb-3 border-b border-gray-600 pb-2">
            <div>
              <h2 className="text-xl font-bold">{employee.name}</h2>
              <p className="text-sm text-gray-400">{employee.email}</p>
            </div>
            <div className="text-right text-sm space-y-1">
              <p>🟢 Active: {employee.taskCount.active}</p>
              <p>🆕 New: {employee.taskCount.newTask}</p>
              <p>✅ Completed: {employee.taskCount.completed}</p>
              <p>❌ Failed: {employee.taskCount.failed}</p>
            </div>
          </div>

          <div className="space-y-3">
            {employee.tasks.map((task) => (
              <div
                key={task.taskNumber}
                className="bg-[#3c3c3c] rounded-md p-3 border border-gray-600"
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold">{task.taskTitle}</h3>
                  <span className="text-sm text-gray-400">{task.taskDate}</span>
                </div>

                <div className="text-xs text-gray-400 mt-2 flex justify-between">
                  <span>Category: {task.taskCategory}</span>
                  <span>
                    {task.status.newTask && '🆕 '}
                    {task.status.active && '🟢 '}
                    {task.status.completed && '✅ '}
                    {task.status.failed && '❌'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeTaskPanel;