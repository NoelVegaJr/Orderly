import * as React from 'react';
import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { IConversation } from '../../utils/types';
import AddTaskButton from './AddTask';

interface ITaskListProps {
  taskList: any;
  conversation: IConversation;
}
const TaskList: React.FunctionComponent<ITaskListProps> = ({
  taskList,
  conversation,
}) => {
  const { title, tasks } = taskList;

  return (
    <div className=' h-full '>
      <div className='w-60   p-2 bg-neutral-600 flex flex-col  max-h-full   gap-2   rounded-lg'>
        <p className='text-white'>{title}</p>
        <Droppable droppableId={`${taskList.id}`}>
          {(provided, snapshot) => {
            return (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className='grow flex flex-col gap-2  overflow-y-auto p-2'
              >
                {tasks?.map((task: any, index: number) => {
                  return (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className='list-none bg-white rounded p-2 border'
                          >
                            {task.title}
                          </li>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>
        <AddTaskButton taskListId={taskList.id} conversation={conversation} />
      </div>
    </div>
  );
};

export default TaskList;
