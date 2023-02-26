import React from 'react';
import styles from './header.module.css';

type Props = {}

function Header({}: Props) {
  return (
    <header className={styles.header}>
      <h1>React + TS Todo</h1>
    </header>
  );
}

export default Header;