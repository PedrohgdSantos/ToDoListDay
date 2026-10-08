import React, { useState } from 'react';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//CSS
//import Styles from './index.css';
import styles from './App.module.css';

//Interface
import { ITask } from "./interfaces/Task";

function App() {

  const [ taskList, setTaskList ] = useState<ITask[]>([]);
  const [ taskToEdit, setTaskToEdit ] = useState<ITask | null>(null);

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task =>{
        return task.id !== id
      })
    )
  }

  return (
    <div>
      {taskToEdit && (
        <Modal onClose={() => setTaskToEdit(null)}>
          <TaskForm
            btnText='Salvar alterações'
            taskList={taskList}
            setTaskList={setTaskList}
            taskToEdit={taskToEdit}
            onSaved={() => setTaskToEdit(null)}
          />
        </Modal>
      )}
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa'
          taskList={taskList}
          setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={(task) => setTaskToEdit(task)}
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
