import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

export default function About(): JSX.Element {
  let history = useHistory();
  return (
    <div>
      <Navbar onSearch={() => history.push('/')} />
      <h1>This is a demo...</h1>
    </div>
  );
}
