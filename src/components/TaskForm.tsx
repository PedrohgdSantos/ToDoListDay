import React, {ChangeEvent, SubmitEvent, useEffect, useState} from 'react'

//CSS
import styles from './TaskForm.module.css';

//Interface
import { ITask, TaskStatus } from "../interfaces/Task";

interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
    taskToEdit?: ITask | null;
    onSaved?: () => void;
}

const TaskForm = ({
    btnText,
    taskList,
    setTaskList,
    taskToEdit,
    onSaved
}: Props) => {
    const [title, setTitle] = useState<string>(taskToEdit?.title ?? "");
    const [difficulty, setDifficulty] = useState<string>(taskToEdit ? String(taskToEdit.difficulty) : "");
    const [status, setStatus] = useState<TaskStatus>(
        taskToEdit?.status ?? "pendentes"
    );

    useEffect(() => {
        setTitle(taskToEdit?.title ?? "")
        setDifficulty(taskToEdit ? String(taskToEdit.difficulty) : "");
    }, [taskToEdit]);

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const difficultyValue = difficulty === "" ? 0 : Number(difficulty);

        if (taskToEdit) {
            setTaskList((currentTask) =>
                currentTask.map((task) =>
                    task.id === taskToEdit.id
                        ? { ...task, title, difficulty: difficultyValue, status}
                        : task
                )
            );
            onSaved?.()
            return
        }

        const newTask: ITask = {
            id: Date.now(),
            title,
            difficulty: difficultyValue,
            status
        }

        setTaskList((currentTasks) => [...currentTasks, newTask]);
        setTitle("");
        setDifficulty("");
        setStatus("pendentes");
        onSaved?.();
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "title") {
            setTitle(event.target.value);
            return;
        }

        const newValue = event.target.value;

        if (newValue === "") {
            setDifficulty("");
            return;
        }

        const normalizedValue = newValue.replace(/^0+(?=\d)/, "");
        const numericValue = Number(normalizedValue);

        if (
            Number.isInteger(numericValue) &&
            numericValue >= 0 &&
            numericValue <= 10
        ) {
            setDifficulty(normalizedValue);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título: </label>
                <input
                    type="text"
                    name="title"
                    placeholder="Título da tarefa"
                    onChange={handleChange}
                    value={title}
                    required
                />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade: </label>
                <input
                    id="difficulty"
                    type="number"
                    name="difficulty"
                    min="0"
                    max="10"
                    step="1"
                    placeholder="0"
                    onFocus={() => {
                        if (difficulty === "0") setDifficulty("");
                    }}
                    onChange={handleChange}
                    value={difficulty}
                />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="status">Status:</label>
                <select
                    name="status"
                    id="status"
                    value={status}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                        setStatus(event.target.value as TaskStatus)
                        }
                    >
                        <option value="direcionadas">Direcionadas</option>
                        <option value="pendentes">Pendentes</option>
                        <option value="em_execucao">Em Execução</option>
                        <option value="concluidas">Concluidas</option>
                        <option value="canceladas">Canceladas</option>
                    </select>
            </div>

            <div className={styles.input_container}>
                <input type="submit" value={btnText} />
            </div>
        </form>
    );
};

export default TaskForm;