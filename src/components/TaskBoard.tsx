import React from "react";
import { ITask, TaskStatus } from "../interfaces/Task";
import TaskList from "./TaskList";
import styles from "./TaskBoard.module.css"

interface Props {
    taskList: ITask[];
    handleDelete(id: number): void;
    handleEdit(task: ITask): void;
    handleMove(id: number, status: TaskStatus): void;
}

const columns: {status: TaskStatus; title: string}[] = [
    {status: "direcionadas", title: "Direcionadas"},
    {status: "pendentes", title: "Pendentes"},
    {status: "em_execucao", title: "Em Execução"},
    {status: "concluidas", title: "Concluidas"},
    {status: "canceladas", title: "Canceladas"},
];

const TaskBoard = ({ taskList, handleDelete, handleEdit, handleMove }: Props) => {
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

const dropTask = (
    event: React.DragEvent<HTMLDivElement>,
    status: TaskStatus
) => {
    event.preventDefault();
    const idText = event.dataTransfer.getData("text/plain");
    const id = Number(idText);

    if (!idText || Number.isNaN(id)) return;
    handleMove(id, status);
};

return (
            <div className={styles.board}>
                {columns.map((column) => {
                    const tasksInColumn = taskList.filter(
                        (task) => task.status === column.status
                    )

                return (
                    <section className={styles.column} key={column.status}>
                        <h2>
                            {column.title} 
                            <span> {tasksInColumn.length} </span> 
                        </h2>
                        <div
                            className={styles.dropZone}
                            onDragOver={allowDrop}
                            onDrop={(event) => dropTask (event, column.status)}
                        >
                            <TaskList
                                taskList={tasksInColumn}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                            
                            </div>
                    </section>
                );
            })}
        </div>
    );
};

export default TaskBoard