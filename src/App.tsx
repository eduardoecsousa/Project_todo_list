import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import styles from './App.module.css';
import TaskForm from './components/form/TaskForm';
import TaskList from './components/list/TaskList';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer ?</h2>
          <TaskForm btnText="createTask"/>
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
