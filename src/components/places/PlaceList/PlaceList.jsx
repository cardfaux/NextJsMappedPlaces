import React from 'react';

import Card from '../../shared/Card/Card';
import PlaceItem from '../PlaceItem/PlaceItem';
import Button from '../../shared/FormElements/Button/Button';
import styles from './PlaceList.module.css';

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={styles.place_list}>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to='/places/new'>Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={styles.place_list}>
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
