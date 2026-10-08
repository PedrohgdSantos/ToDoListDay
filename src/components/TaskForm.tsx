import React, {useState, ChangeEvent, SubmitEvent, useEffect} from 'react'

//CSS
import styles from './TaskForm.module.css';

//Interface
import { ITask } from "../interfaces/Task";

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
    const [title, setTitle] = useState<string>(taskToEdit?.title ?? "")
    const [difficulty, setDifficulty] = useState<number>(taskToEdit?.difficulty ?? 0)

    useEffect(() => {
        setTitle(taskToEdit?.title ?? "")
        setDifficulty(taskToEdit?.difficulty ?? 0)
    }, [taskToEdit])

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (taskToEdit) {
            setTaskList(taskList.map(task =>
                task.id === taskToEdit.id ? { ...task, title, difficulty } : task
            ))
            onSaved?.()
            return
        }

        const newTask: ITask = {
            id: Math.floor(Math.random() * 1000),
            title,
            difficulty
        }

        setTaskList([...taskList, newTask])
        setTitle("")
        setDifficulty(0)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
    }

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
                />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade: </label>
                <input
                    type="text"
                    name="difficulty"
                    placeholder="Dificuldade da tarefa"
                    onChange={handleChange}
                    value={difficulty}
                />
            </div>
            <div className={styles.input_container}>
                <input type="submit" value={btnText} />
            </div>
        </form>
    )
}

export default TaskForm