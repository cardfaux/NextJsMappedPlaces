import React from 'react';

import ActiveLink from '../../../../helpers/ActiveLink';
import styles from './NavLinks.module.css';

const NavLinks = (props) => {
  return (
    <ul className={styles.nav_links}>
      <style jsx>{`
        .nav-link {
          text-decoration: none;
        }
        .active {
          background: #f8df00;
          border-color: #292929;
          color: #292929;
        }
        .active:after {
          content: '';
        }
      `}</style>
      <li>
        <ActiveLink activeClassName='active' href='/users'>
          <a>ALL USERS</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName='active' href='/u1/places'>
          <a>MY PLACES</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName='active' href='/places/new'>
          <a>ADD PLACE</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName='active' href='/auth'>
          <a>AUTHENTICATE</a>
        </ActiveLink>
      </li>
    </ul>
  );
};

export default NavLinks;
