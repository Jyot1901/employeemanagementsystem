import React from 'react';

const TasknumbersList = ({ data }) => {
  if (!data || !data.taskNumbers) {
    return <div>Loading task numbers...</div>;
  }

  return (
    <div className="flex justify-between gap-5 screen">
      <div className="rounded-xl px-9 py-6 w-[45%] bg-teal-500">
        <h2 className="text-3xl text-white">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium text-white">New Task</h3>
      </div>
      <div className="rounded-xl px-9 py-6 w-[45%] bg-green-700">
        <h2 className="text-3xl text-white">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium text-white">Completed Task</h3>
      </div>
      <div className="rounded-xl px-9 py-6 w-[45%] bg-blue-600">
        <h2 className="text-3xl text-white">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium text-white">Active Task</h3>
      </div>
      <div className="rounded-xl px-9 py-6 w-[45%] bg-red-600">
        <h2 className="text-3xl text-white">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium text-white">Failed Task</h3>
      </div>
    </div>
  );
};

export default TasknumbersList;
