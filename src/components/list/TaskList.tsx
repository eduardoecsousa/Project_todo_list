import React from 'react';
import style from './TaskList.module.css';
import { ITask } from '../../interface/task';

type Props = {
  taskList: ITask[],
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas</p>
      )}
    </>
  );
}

export default TaskList;
