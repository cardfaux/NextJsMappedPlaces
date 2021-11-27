import React, { useState } from 'react';
import Link from 'next/link';

import MainHeader from '../MainHeader/MainHeader';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../../Backdrop/Backdrop';
import styles from './MainNavigation.module.css';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={styles.main_navigation__drawer_nav}>
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className={styles.main_navigation__menu_btn}
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={styles.main_navigation__title}>
          <Link href='/'>
            <a>YourPlaces</a>
          </Link>
        </h1>
        <nav className={styles.main_navigation__header_nav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
