import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../searchbar/Searchbar';
import styles from './Navbar.scss';

export default function Navbar({ onSearch }: NavProps): JSX.Element {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>
        <div>Navbar</div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
      </div>
      <Searchbar onSearch={onSearch} />
    </div>
  );
}

type NavProps = {
  onSearch: (searchValue: string) => any;
};
