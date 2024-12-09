import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvided';

const NewTask = ({ data, employeeData }) => {
    const [userData, setUserData] = useContext(AuthContext);

    const handleAcceptTask = () => {
        const updatedUserData = userData.map((employee) => {
            if (employee.id === employeeData.id) {
                const updatedTasks = employee.tasks.map((task) =>
                    task.title === data.title
                        ? { ...task, newTask: false, active: true }
                        : task
                );

                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskNumbers: {
                        ...employee.taskNumbers,
                        newTask: employee.taskNumbers.newTask - 1,
                        active: employee.taskNumbers.active + 1,
                    },
                };
            }
            return employee;
        });

        setUserData(updatedUserData);
    };

    return (
        <div className="p-5 h-full flex-shrink-0 w-[300px] bg-gray-800 rounded-xl text-white">
            <div className="flex justify-between items-center">
                <h3 className="bg-teal-700 px-3 py-1 rounded text-sm">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>
            <div className="mt-4">
                <button
                    onClick={handleAcceptTask}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
                >
                    Accept Task
                </button>
            </div>
        </div>
    );
};

export default NewTask;
