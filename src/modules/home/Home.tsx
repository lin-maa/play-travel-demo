import React, { useState } from 'react';
import { fetchItems } from '../../api/index';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import styles from './Home.scss';

export default function Home(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  return (
    <div className={styles.pageWrap}>
      <Navbar
        onSearch={async (search) => {
          setSearchValue(search);
          let { data } = await fetchItems(search);
          setImgUrls(data.results.map((x) => x.urls.regular));
          setTags(
            data.results
              .map((x) => x.tags.filter((t) => t.type === 'search'))
              .reduce((acc, item) => [...acc, ...item], [])
              .map((x) => x.title)
          );
        }}
      />
      <main className={styles.contentWrap}>
        <h1>{searchValue}</h1>
        <div className={styles.tagWrap}>
          {tags.map((item, index) => {
            return (
              <Button
                key={index}
                label={item}
                onClick={async () => {
                  setSearchValue(item);
                  let { data } = await fetchItems(item);
                  setImgUrls(data.results.map((x) => x.urls.regular));
                }}
              />
            );
          })}
        </div>
        <div className={styles.imgWrap}>
          {imgUrls.map((url) => {
            return <img key={url} src={url} />;
          })}
        </div>
      </main>
    </div>
  );
}
