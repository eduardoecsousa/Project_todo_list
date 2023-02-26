import React from 'react';
import styles from './footer.module.css';

type Props = {}

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo</span>@ 2021
      </p>
    </footer>
  );
}

export default Footer;
  