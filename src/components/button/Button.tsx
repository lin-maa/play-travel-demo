import React from 'react';
import styles from './Button.scss';

export default function Button({ label, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}

type ButtonProps = {
  label: string;
  onClick: () => Promise<void>;
};
