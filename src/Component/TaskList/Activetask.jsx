import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvided';

const ActiveTask = ({ data, employeeData }) => {
    const [userData, setUserData] = useContext(AuthContext);

    const handleCompleteTask = () => {
        const updatedUserData = userData.map((employee) => {
            if (employee.id === employeeData.id) {
                const updatedTasks = employee.tasks.map((task) =>
                    task.title === data.title
                        ? { ...task, active: false, completed: true }
                        : task
                );

                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskNumbers: {
                        ...employee.taskNumbers,
                        active: employee.taskNumbers.active - 1,
                        completed: employee.taskNumbers.completed + 1,
                    },
                };
            }
            return employee;
        });

        setUserData(updatedUserData);
    };

    const handleFailTask = () => {
        const updatedUserData = userData.map((employee) => {
            if (employee.id === employeeData.id) {
                const updatedTasks = employee.tasks.map((task) =>
                    task.title === data.title
                        ? { ...task, active: false, failed: true }
                        : task
                );

                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskNumbers: {
                        ...employee.taskNumbers,
                        active: employee.taskNumbers.active - 1,
                        failed: employee.taskNumbers.failed + 1,
                    },
                };
            }
            return employee;
        });

        setUserData(updatedUserData);
    };

    return (
        <div className="p-5 h-full flex-shrink-0 w-[300px] bg-gray-700 rounded-xl text-white">
            <div className="flex justify-between items-center">
                <h3 className="bg-purple-700 px-3 py-1 rounded text-sm">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>
            <div className="flex justify-between mt-4">
                <button
                    onClick={handleCompleteTask}
                    className="rounded-md bg-green-600 hover:bg-green-700 py-2 px-3 text-sm"
                >
                    Mark as Completed
                </button>
                <button
                    onClick={handleFailTask}
                    className="rounded-md bg-red-600 hover:bg-red-700 py-2 px-3 text-sm"
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};

export default ActiveTask;
