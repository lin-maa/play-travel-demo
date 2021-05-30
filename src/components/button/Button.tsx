import React from 'react';
import styles from './Button.module.scss';

export default function Button({
  label,
  onClick,
  type = 'primary',
}: ButtonProps): JSX.Element {
  return (
    <button className={styles.button + ' ' + styles[type]} onClick={onClick}>
      {label}
    </button>
  );
}

type ButtonProps = {
  label: string;
  onClick: () => Promise<void>;
  type?: 'primary' | 'secondary';
};
