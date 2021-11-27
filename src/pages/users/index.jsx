import React from 'react';

import UsersList from '../../components/user/UsersList/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'James Hagood',
      image: '/hagood.png',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
