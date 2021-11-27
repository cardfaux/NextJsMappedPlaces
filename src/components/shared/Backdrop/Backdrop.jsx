import React from 'react';

import BackdropPortal from '../../../HOC/backdrop-portal';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
  return (
    <BackdropPortal>
      <div className={styles.backdrop} onClick={props.onClick}></div>
    </BackdropPortal>
  );
};
export default Backdrop;
