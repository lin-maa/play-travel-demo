import React, { useState } from 'react';
import Button from '../button/Button';
import styles from './Searchbar.module.scss';

export default function Searchbar({ onSearch }: SearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div className={styles.searchbar}>
      <input onChange={(e) => setSearchValue(e.target.value)} />
      <Button
        label={'Search'}
        onClick={() => onSearch(searchValue)}
        type="primary"
      />
    </div>
  );
}

type SearchProps = {
  onSearch: (searchValue: string) => Promise<void>;
};
