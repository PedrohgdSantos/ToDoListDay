import React, { useState } from 'react';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskBoard from './components/TaskBoard';
import Modal from './components/Modal';

//CSS
//import Styles from './index.css';
import styles from './App.module.css';

//Interface
import { ITask, TaskStatus } from "./interfaces/Task";

function App() {

  const [ taskList, setTaskList ] = useState<ITask[]>([]);
  const [ taskToEdit, setTaskToEdit ] = useState<ITask | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const deleteTask = (id:number) => {
    setTaskList((currentTask) =>
      currentTask.filter((task) => task.id !== id)
    );
  };

  const moveTask = (id: number, status: TaskStatus) => {
    setTaskList((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? {...task, status} : task
      )
    );
  };

  const openCreateForm = () => {
        setTaskToEdit(null);
        setIsFormOpen(true);
    };

  const openEditForm = (task: ITask) => {
        setTaskToEdit(task);
        setIsFormOpen(true);
    };

  const closeForm = () => {
        setIsFormOpen(false);
        setTaskToEdit(null);
    };

  return (
    <div>
      {isFormOpen && (
          <Modal
            title={taskToEdit ? "Editar tarefa" : "Nova tarefa"}
            onClose={closeForm}
          >
            <TaskForm
              btnText={taskToEdit ? "Salvar alteracoes" : "Criar tarefa"}
              taskList={taskList}
              setTaskList={setTaskList}
              taskToEdit={taskToEdit}
              onSaved={closeForm}
            />
          </Modal>
        )}

            <Header />
            <main className={styles.main}>
                <div className={styles.toolbar}>
                    <h2>Suas tarefas</h2>
                    <button type="button" onClick={openCreateForm}>
                        Nova tarefa
                    </button>
                </div>

                <TaskBoard
                    taskList={taskList}
                    handleDelete={deleteTask}
                    handleEdit={openEditForm}
                    handleMove={moveTask}
                />
            </main>
            <Footer />
        </div>
    );
}

export default App;
