import React from 'react';
import Link from 'next/link';

import Avatar from '../../shared/Avatar/Avatar';
import Card from '../../shared/Card/Card';
import styles from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={styles.user_item}>
      <Card className={styles.user_item__content}>
        <Link href={`${props.id}/places`}>
          <a>
            <div className={styles.user_item__image}>
              <Avatar
                image={props.image}
                alt={props.name}
                title={props.title}
                width='64px'
              />
            </div>
            <div className={styles.user_item__info}>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
              </h3>
            </div>
          </a>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
