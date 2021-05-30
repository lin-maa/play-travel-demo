import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../searchbar/Searchbar';
import styles from './Navbar.module.scss';

export default function Navbar({ onSearch }: NavProps): JSX.Element {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>
        <div className={styles.item}>Navbar</div>
        <Link className={styles.item + ' ' + styles.smFont} to="/">
          Home
        </Link>
        <Link className={styles.item + ' ' + styles.smFont} to="/about">
          About Me
        </Link>
      </div>
      <Searchbar onSearch={onSearch} />
    </div>
  );
}

type NavProps = {
  onSearch: (searchValue: string) => any;
};
