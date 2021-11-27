import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Portal from '../../../../HOC/portal';
import styles from './SideDrawer.module.css';

const SideDrawer = (props) => {
  return (
    <Portal>
      <CSSTransition
        in={props.show}
        timeout={200}
        classNames='slide-in-left'
        mountOnEnter
        unmountOnExit
      >
        <aside className={styles.side_drawer} onClick={props.onClick}>
          {props.children}
        </aside>
      </CSSTransition>
    </Portal>
  );
};

export default SideDrawer;
