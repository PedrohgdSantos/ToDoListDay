import React from 'react'

// interfaces
import { ITask } from '../interfaces/Task';

// CSS
import styles from './TaskList.module.css'

interface Props {
    taskList: ITask[];
    handleDelete(id: number): void;
    handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
    return (
      <>
        {taskList.length > 0 ? (
            taskList.map((task) => (
                <div key={task.id} className={styles.task}>
                    <div className={styles.details}>
                        <h4>{task.title}</h4>
                        <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <div className={styles.actions}>
                        <button
                            type="button"
                            aria-label={`Editar ${task.title}`}
                            onClick={() => handleEdit(task)}
                        >
                            <i className='bi bi-pencil' />
                        </button>
                        <button
                            type="button"
                            aria-label={`Excluir ${task.title}`}
                            onClick={() => handleDelete(task.id)}
                        >
                            <i className='bi bi-trash' />
                        </button>
                    </div>
                </div>
            ))
        ) : (
            <p>Não há tarefas</p>
        )}
      </>
    );
};

export default TaskList