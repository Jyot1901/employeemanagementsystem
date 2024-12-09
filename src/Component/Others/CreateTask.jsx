import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvided";

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    // State for form inputs
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");

    // Handle task submission
    const submitHandler = (e) => {
        e.preventDefault();

        // Validate inputs
        if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
            alert("Please fill in all fields");
            return;
        }

        // Create new task object
        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        // Update userData immutably
        const updatedUserData = userData.map((employee) => {
            if (employee.firstName === assignTo) {
                return {
                    ...employee,
                    tasks: [...employee.tasks, newTask],
                    taskNumbers: {
                        ...employee.taskNumbers,
                        newTask: employee.taskNumbers.newTask + 1,
                    },
                };
            }
            return employee;
        });

        // Update the AuthContext
        setUserData(updatedUserData);

        // Reset form fields
        setTaskTitle("");
        setCategory("");
        setTaskDescription("");
        setAssignTo("");
        setTaskDate("");
    };

    return (
        <div className="p-5 bg-[#2c2c2c] mt-7 rounded">
            <form
                onSubmit={submitHandler}
                className="text-xl flex flex-wrap w-full items-start justify-between"
            >
                <div className="w-1/2 text-2xl">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-300 mb-0.5">
                            Task Title
                        </h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Make a UI Design"
                            required
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-300 mb-0.5">
                            Date
                        </h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="date"
                            required
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-300 mb-0.5">
                            Assign To
                        </h3>
                        <select
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-[#2c2c2c] border-[1px] border-gray-400 mb-4"
                            required
                        >
                            <option value="">Select Employee</option>
                            {userData.map((employee) => (
                                <option
                                    key={employee.id}
                                    value={employee.firstName}
                                >
                                    {employee.firstName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-300 mb-0.5">
                            Category
                        </h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Design, Development, etc..."
                            required
                        />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-start">
                    <h3 className="text-lg font-semibold text-gray-300 mb-0.5">
                        Description
                    </h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
                        cols="30"
                        rows="10"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-emerald-700 py-3 hover:bg-emerald-800 px-5 rounded text-lg font-bold mt-4 w-full"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;