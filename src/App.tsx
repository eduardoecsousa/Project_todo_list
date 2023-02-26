import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h2>Conteudo</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
