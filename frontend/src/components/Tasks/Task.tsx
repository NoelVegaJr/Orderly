import * as React from 'react';

interface ITaskProps {
  task: any;
}

const Task: React.FunctionComponent<ITaskProps> = ({ task }) => {
  return <div className='w-full h-8 p-2 bg-white rounded'> {task.title}</div>;
};

export default Task;
