import React from 'react';
import style from './Spinner.module.css';

function Spinner() {
  return (
    <div className={style.container}>
      <div className={style.spinner} />
      <div className={style.loading}>Loading</div>
    </div>
  );
}

export default Spinner;