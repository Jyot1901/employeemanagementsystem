import React, { useContext } from 'react'; // Import useContext
import { AuthContext } from '../../context/AuthProvided'; // Import AuthContext

const Alltask = () => {
    const [userData,setuserData] = useContext(AuthContext); // Access AuthContext to get employee data

    return (
        <div className="bg-[#1c1c1c] p-5 rounded mt-5">
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className='text-lg  font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg  font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg  font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg  font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg  font-medium w-1/5'>Failed</h5>
            </div>
            <div className=''>
                {userData && userData.employees ? (
                    userData.map((employee) => (
                        <div key={employee.id} className="bg-[#1c1c1c] border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                            <h2 className='text-lg  font-medium w-1/5'>{employee.firstName}</h2>
                            <h3 className='text-lg  font-medium w-1/5 text-blue-500'>{employee.taskNumbers.newTask}</h3>
                            <h5 className='text-lg  font-medium w-1/5 text-yellow-400'>{employee.taskNumbers.active}</h5>
                            <h5 className='text-lg  font-medium w-1/5 text-green-600'>{employee.taskNumbers.completed}</h5>
                            <h5 className='text-lg  font-medium w-1/5 text-red-600'>{employee.taskNumbers.failed}</h5>

                        </div>
                    ))
                ) : (
                    <p>No employee data available</p> // Fallback if no employees are available
                )}
            </div>
        </div>
    );
};

export default Alltask;
