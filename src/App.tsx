import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import styles from './App.module.css';
import TaskForm from './components/form/TaskForm';
import TaskList from './components/list/TaskList';
import { ITask } from './interface/task';
import Modal from './components/modal/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter((task) => task.id !== id)
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = ():void => {
    hideOrShowModal(true);
  };

  return (
    <div>
      <Modal children={<TaskForm btnText="Editar Tafera" taskList={taskList} /> } />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer ?</h2>
          <TaskForm btnText="Adicionar tarefa" taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={ deleteTask }
            handleEdit={ editTask }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
