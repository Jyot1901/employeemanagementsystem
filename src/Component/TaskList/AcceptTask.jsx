import React from 'react';

const AcceptTask = ({ data }) => {
    return (
        <div className="p-5 h-full flex-shrink-0 w-[300px] bg-indigo-500 rounded-xl text-white">
            <div className="flex justify-between items-center">
                <h3 className="bg-purple-700 px-3 py-1 rounded text-sm">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>
            <div className="flex justify-between mt-4">
                <button className="rounded-md bg-green-600 py-1 px-2 text-sm">Mark as Completed</button>
                <button className="rounded-md bg-red-600 py-1 px-2 text-sm">Mark as Failed</button>
            </div>
        </div>
    );
};

export default AcceptTask;
