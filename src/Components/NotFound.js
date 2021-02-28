import React from 'react';
import style from '../notFound.module.css';
const NotFound = () => {
  return (
    <div className={style.html}>
      <div className={style.body}>
        <div className={style.main}>
          <div className={style.fof}>
            <h1>Error 404</h1>
            <br />
            <h1>Page not found.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
