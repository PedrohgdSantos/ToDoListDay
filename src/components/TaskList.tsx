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
    if (taskList.length === 0) {
        return <p className={styles.empty}>Nenhuma Tarefa</p>
    }

    return (
        <>
            {taskList.map((task) => (
                <div
                    key={task.id}
                    className={styles.task}
                    draggable
                    onDragStart={(event: React.DragEvent<HTMLDivElement>) => {
                        event.dataTransfer.setData("text/plain", String(task.id));
                    }}
                >
                    <div className={styles.details}>
                        <h3>{task.title}</h3>
                        <p>Dificuldade: {task.difficulty}</p>
                        {task.description.trim() && (
                            <p className={styles.description}>{task.description}</p>
                        )}
                    </div>
                    <div className={styles.actions}>
                        <button
                            type='button'
                            aria-label={`Editar ${task.title}`}
                            onClick={() => handleEdit(task)}
                        >
                            <i className="bi bi-pencil" />
                        </button>
                        <button
                            type='button'
                            aria-label={`Excluir ${task.title}`}
                            onClick={() => handleDelete (task.id)}
                        >
                            <i className="bi bi-trash"/>
                        </button>
                    </div>
                </div>
            ))}        
        </>
    );
};

export default TaskList;