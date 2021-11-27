import React from 'react';

import Input from '../../components/shared/FormElements/Input/Input';
import styles from '../../styles/PlacesNew.module.css';
const index = () => {
  return (
    <form className={styles.place_form}>
      <Input element='input' type='text' label='Title' />
    </form>
  );
};

export default index;
