import React from 'react'
import NewTask from './NewTask'
import ActiveTask from './ActiveTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto py-5 flex item-center justify-start gap-5 flex-nowrap w-full mt-10'>
            {data?.tasks?.length > 0 ? (
                data.tasks.map((elem, index) => {
                    if (elem.newTask) {
                        return <NewTask key={index} data={elem} employeeData={data} />
                    }
                    if (elem.active) {
                        return <ActiveTask key={index} data={elem} employeeData={data} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={index} data={elem} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={index} data={elem} />
                    }
                    return null;
                })
            ) : (
                <h1 className='text-white text-2xl'>No tasks available</h1>
            )}
        </div>
    )
}

export default TaskList